"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/terminal.module.css';

const GRID_WIDTH = 60;
const GRID_HEIGHT = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };
const INITIAL_SPEED = 200;
const MIN_SPEED = 50;
const SPEED_INCREMENT = 5;

export default function SnakeGame({ onExit }) {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState({ x: 30, y: 10 });
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [speed, setSpeed] = useState(INITIAL_SPEED);
    const boardRef = useRef(null);

    const generateFood = () => {
        return {
            x: Math.floor(Math.random() * GRID_WIDTH),
            y: Math.floor(Math.random() * GRID_HEIGHT)
        };
    };

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setFood(generateFood());
        setDirection(INITIAL_DIRECTION);
        setGameOver(false);
        setScore(0);
        setSpeed(INITIAL_SPEED);
    };

    useEffect(() => {
        // Focus the board to capture key events
        if (boardRef.current) {
            boardRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameOver) {
                if (e.key === 'r') resetGame();
                if (e.key === 'q') onExit();
                return;
            }

            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
                case 'Escape':
                    onExit();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [direction, gameOver, onExit]);

    useEffect(() => {
        if (gameOver || (direction.x === 0 && direction.y === 0)) return;

        const moveSnake = setInterval(() => {
            setSnake((prevSnake) => {
                const newHead = {
                    x: prevSnake[0].x + direction.x,
                    y: prevSnake[0].y + direction.y
                };

                // Check collisions
                if (
                    newHead.x < 0 ||
                    newHead.x >= GRID_WIDTH ||
                    newHead.y < 0 ||
                    newHead.y >= GRID_HEIGHT ||
                    prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
                ) {
                    setGameOver(true);
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                // Check food
                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore(s => s + 1);
                    setFood(generateFood());
                    setSpeed(prev => Math.max(MIN_SPEED, prev - SPEED_INCREMENT));
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, speed);

        return () => clearInterval(moveSnake);
    }, [direction, food, gameOver, speed]);

    // Render logic
    const renderBoard = () => {
        let board = Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(' '));

        // Draw food
        board[food.y][food.x] = 'O';

        // Draw snake
        snake.forEach((segment, index) => {
            if (segment.x >= 0 && segment.x < GRID_WIDTH && segment.y >= 0 && segment.y < GRID_HEIGHT) {
                board[segment.y][segment.x] = index === 0 ? 'S' : '#';
            }
        });

        // Convert to string with border
        const topBorder = '+' + '-'.repeat(GRID_WIDTH) + '+';
        const rows = board.map(row => '|' + row.join('') + '|');
        const bottomBorder = '+' + '-'.repeat(GRID_WIDTH) + '+';

        return [topBorder, ...rows, bottomBorder].join('\n');
    };

    return (
        <div
            className={styles.snakeGame}
            ref={boardRef}
            tabIndex={0}
            style={{ outline: 'none', fontFamily: 'monospace', whiteSpace: 'pre' }}
        >
            <div>SCORE: {score}</div>
            {renderBoard()}
            <div style={{ marginTop: '10px' }}>
                {gameOver ? (
                    <span style={{ color: 'red' }}>GAME OVER! Press 'R' to Restart, 'Q' to Quit.</span>
                ) : (
                    <span>Use Arrow Keys to Move. Press 'ESC' to Quit.</span>
                )}
            </div>
        </div>
    );
}
