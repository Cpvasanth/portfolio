import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function OgImageGen({ title, subtitle, path }) {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1e1e1e', // VS Code Dark Theme Background
                    fontFamily: 'monospace',
                }}
            >
                {/* VS Code Window Styling */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '90%',
                        height: '80%',
                        backgroundColor: '#252526', // Editor Group Background
                        borderRadius: '12px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid #333',
                    }}
                >
                    {/* Title Bar */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '40px',
                            backgroundColor: '#333333',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px',
                            paddingLeft: '15px',
                            borderBottom: '1px solid #1e1e1e',
                        }}
                    >
                        {/* Traffic Lights */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
                        </div>
                        {/* Filename/Path */}
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                                justifyContent: 'center',
                                color: '#cccccc',
                                fontSize: '16px',
                                opacity: 0.8,
                            }}
                        >
                            {path || 'portfolio/src/App.js'}
                        </div>
                    </div>

                    {/* Editor Content Area */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            padding: '40px',
                            textAlign: 'center',
                        }}
                    >
                        {/* Subtitle / Role */}
                        {subtitle && (
                            <div
                                style={{
                                    color: '#4ec9b0', // VS Code Class Color
                                    fontSize: '24px',
                                    marginBottom: '10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                class {subtitle} {'{'}
                            </div>
                        )}

                        {/* Main Title */}
                        <div
                            style={{
                                fontSize: '60px',
                                fontWeight: 'bold',
                                background: 'linear-gradient(90deg, #007acc, #00b4d8)', // VS Code Blueish Gradient
                                backgroundClip: 'text',
                                color: 'transparent',
                                marginBottom: '20px',
                                textShadow: '0 0 40px rgba(0,122,204,0.3)',
                                padding: '10px 0',
                            }}
                        >
                            {title}
                        </div>

                        {/* Closing Bracket/Decor */}
                        {subtitle && (
                            <div
                                style={{
                                    color: '#4ec9b0',
                                    fontSize: '24px',
                                    marginTop: '10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {'}'}
                            </div>
                        )}

                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            right: '40px',
                            fontSize: '20px',
                            color: '#666',
                        }}>
                            Line 1, Col 1
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
