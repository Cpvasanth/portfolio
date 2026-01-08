"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import CharacterCount from "@tiptap/extension-character-count";
import FontFamily from "@tiptap/extension-font-family";

import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaListUl,
    FaListOl,
    FaQuoteRight,
    FaUndo,
    FaRedo,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaAlignJustify,
    FaCode,
    FaEraser,
    FaLink,
    FaImage,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import { useCallback, useState } from "react";

// Custom Font Size Extension (Simple implementation)
import { Extension } from "@tiptap/core";

// Define a simple FontSize extension if not available
const FontSize = Extension.create({
    name: "fontSize",
    addOptions() {
        return {
            types: ["textStyle"],
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: (element) => element.style.fontSize.replace("px", ""),
                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}px`,
                            };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setFontSize:
                (fontSize) =>
                    ({ chain }) => {
                        return chain()
                            .setMark("textStyle", { fontSize })
                            .run();
                    },
            unsetFontSize:
                () =>
                    ({ chain }) => {
                        return chain()
                            .setMark("textStyle", { fontSize: null })
                            .removeEmptyTextStyle()
                            .run();
                    },
        };
    },
});


interface TiptapEditorProps {
    content: string;
    onChange: (content: string) => void;
    isPreview?: boolean;
    onTogglePreview?: () => void;
}

const MenuBar = ({ editor, isPreview, onTogglePreview }: { editor: any, isPreview?: boolean, onTogglePreview?: () => void }) => {
    if (!editor) {
        return null;
    }

    if (isPreview) {
        return (
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
                <span className="text-sm font-medium text-gray-500">Preview Mode</span>
                <button
                    onClick={onTogglePreview}
                    className="p-2 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center gap-2 text-sm font-medium"
                >
                    <FaEyeSlash /> Drop Preview
                </button>
            </div>
        )
    }

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);

        if (url === null) {
            return;
        }

        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);

    const addImage = useCallback(() => {
        const url = window.prompt("Image URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);


    const ToolbarButton = ({ onClick, disabled = false, isActive = false, title, children }: any) => (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors ${isActive ? "bg-blue-50 text-blue-600" : ""
                } disabled:opacity-30`}
            title={title}
        >
            {children}
        </button>
    );

    const Divider = () => <div className="w-px h-6 bg-gray-200 mx-1 self-center" />;

    return (
        <div className="flex flex-col border-b border-gray-300 bg-white sticky top-14 z-20 shadow-sm">
            {/* Top Row: Formatting */}
            <div className="flex flex-wrap gap-1 items-center px-4 py-2 border-b border-gray-100">
                <div className="flex items-center gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().chain().focus().undo().run()}
                        title="Undo"
                    >
                        <FaUndo size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().chain().focus().redo().run()}
                        title="Redo"
                    >
                        <FaRedo size={14} />
                    </ToolbarButton>
                </div>

                <Divider />

                <div className="flex items-center gap-2 mx-1">
                    <select
                        onChange={(e) => {
                            if (e.target.value === 'p') editor.chain().focus().setParagraph().run();
                            else editor.chain().focus().toggleHeading({ level: parseInt(e.target.value) }).run();
                        }}
                        className="text-sm border border-gray-200 rounded px-2 py-1 outline-none hover:border-gray-400 focus:border-blue-500"
                        value={editor.isActive('heading', { level: 1 }) ? '1' : editor.isActive('heading', { level: 2 }) ? '2' : editor.isActive('heading', { level: 3 }) ? '3' : 'p'}
                    >
                        <option value="p">Paragraph</option>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                    </select>

                    <select
                        onChange={(e) => {
                            // @ts-ignore
                            editor.chain().focus().setFontSize(e.target.value).run();
                        }}
                        className="text-sm border border-gray-200 rounded px-2 py-1 outline-none hover:border-gray-400 focus:border-blue-500 w-16"
                        defaultValue="16"
                    >
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <Divider />

                <div className="flex items-center gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        isActive={editor.isActive("bold")}
                        title="Bold"
                    >
                        <FaBold size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        isActive={editor.isActive("italic")}
                        title="Italic"
                    >
                        <FaItalic size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        isActive={editor.isActive("underline")}
                        title="Underline"
                    >
                        <FaUnderline size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        isActive={editor.isActive("strike")}
                        title="Strikethrough"
                    >
                        <FaStrikethrough size={14} />
                    </ToolbarButton>
                </div>

                <Divider />

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center group">
                        <label htmlFor="color-picker" className="cursor-pointer p-2 rounded hover:bg-gray-100 flex items-center justify-center">
                            <span className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: editor.getAttributes('textStyle').color || '#000' }}></span>
                        </label>
                        <input
                            type="color"
                            id="color-picker"
                            onInput={(e: any) => editor.chain().focus().setColor(e.target.value).run()}
                            value={editor.getAttributes('textStyle').color || '#000000'}
                            className="absolute opacity-0 w-8 h-8 cursor-pointer"
                        />
                    </div>
                </div>

                <Divider />

                <div className="flex items-center gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        isActive={editor.isActive({ textAlign: 'left' })}
                    >
                        <FaAlignLeft size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        isActive={editor.isActive({ textAlign: 'center' })}
                    >
                        <FaAlignCenter size={14} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        isActive={editor.isActive({ textAlign: 'right' })}
                    >
                        <FaAlignRight size={14} />
                    </ToolbarButton>
                </div>

                <div className="ml-auto flex items-center gap-2">
                    <button
                        onClick={onTogglePreview}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 font-medium transition-colors"
                    >
                        <FaEye size={14} /> Preview
                    </button>
                </div>
            </div>

            {/* Bottom Row: Insert/Lists */}
            <div className="flex flex-wrap gap-4 items-center px-4 py-1.5 bg-gray-50 border-b border-gray-200 text-sm">
                <div className="flex items-center gap-1">
                    <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")}>
                        <FaListUl size={12} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")}>
                        <FaListOl size={12} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive("blockquote")}>
                        <FaQuoteRight size={12} />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive("code")}>
                        <FaCode size={12} />
                    </ToolbarButton>
                </div>

                <Divider />

                <div className="flex items-center gap-1">
                    <button onClick={setLink} className={`flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded ${editor.isActive('link') ? 'bg-blue-100 text-blue-700' : ''}`}>
                        <FaLink size={12} /> Link
                    </button>
                    <button onClick={addImage} className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded">
                        <FaImage size={12} /> Image
                    </button>
                </div>

                <Divider />

                <button onClick={() => editor.chain().focus().unsetAllMarks().run()} className="flex items-center gap-1 hover:bg-red-100 text-red-600 px-2 py-1 rounded ml-auto">
                    <FaEraser size={12} /> Clear Format
                </button>
            </div>
        </div>
    );
};

const TiptapEditor = ({ content, onChange, isPreview, onTogglePreview }: TiptapEditorProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TextStyle,
            Color,
            FontSize,
            // @ts-ignore
            FontFamily,
            Placeholder.configure({
                placeholder: 'Type something...',
                emptyEditorClass: 'is-editor-empty before:content-[attr(data-placeholder)] before:text-gray-400 before:float-left before:pointer-events-none h-full',
            }),
            CharacterCount,
        ],
        content,
        // editable: !isPreview, // Don't use this, it causes re-mount issues sometimes. Use CSS or logic.
        editorProps: {
            attributes: {
                class:
                    "prose prose-lg max-w-none focus:outline-none min-h-[800px] px-12 py-12 bg-white shadow-sm border border-gray-100 mx-auto my-8",
                style: "max-width: 850px;",
            },
        },
        onUpdate: ({ editor }) => {
            // Use setTimeout to avoid "Cannot update a component while rendering a different component" error
            // This ensures the parent state update happens after the current render cycle
            const html = editor.getHTML();
            setTimeout(() => {
                onChange(html);
            }, 0);
        },
        immediatelyRender: false,
    });

    // Handle read-only logic manually if needed, or just rely on re-render when prop changes
    // But for preview mode, we might want to just overlay or toggle class

    if (editor && editor.isEditable === isPreview) {
        editor.setEditable(!isPreview);
    }

    return (
        <div className="flex flex-col relative bg-[#F3F4F6] min-h-screen">
            <MenuBar editor={editor} isPreview={isPreview} onTogglePreview={onTogglePreview} />
            <div className={`flex-1 w-full overflow-y-auto ${isPreview ? 'pointer-events-none opacity-90' : ''}`}>
                <EditorContent editor={editor} />
            </div>

            {/* Footer Stats Bar */}
            {editor && (
                <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-1 text-xs text-gray-500 flex justify-between z-30">
                    <div className="flex gap-4">
                        <span>{editor.storage.characterCount.words()} words</span>
                        <span>{editor.storage.characterCount.characters()} characters</span>
                    </div>
                    <div>
                        {/* Autosave Simulation */}
                        <span className="flex items-center gap-1 text-green-600"><span className="w-2 h-2 rounded-full bg-green-500 block"></span> Auto-saved</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TiptapEditor;
