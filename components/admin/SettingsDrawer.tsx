"use client";

import { FaTimes, FaCloudUploadAlt, FaTrash } from "react-icons/fa";

interface SettingsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    formData: any;
    setFormData: (data: any) => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploading: boolean;
    removeImage: () => void;
}

export default function SettingsDrawer({
    isOpen,
    onClose,
    formData,
    setFormData,
    handleImageUpload,
    uploading,
    removeImage,
}: SettingsDrawerProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto w-full">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                        <h2 className="text-lg font-bold text-gray-800">Post Settings</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-50 rounded-full"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Featured Image */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                Featured Image
                            </h3>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-1">
                                {formData.image_url ? (
                                    <div className="relative group">
                                        <img
                                            src={formData.image_url}
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg" />
                                        <button
                                            onClick={removeImage}
                                            className="absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-red-50"
                                            type="button"
                                            title="Remove image"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-white transition-all">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                                            <FaCloudUploadAlt size={32} className="mb-2" />
                                            <p className="text-sm">Click to upload</p>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                            disabled={uploading}
                                        />
                                    </label>
                                )}
                            </div>
                            {uploading && (
                                <p className="text-xs text-center text-gray-500 animate-pulse">
                                    Uploading image...
                                </p>
                            )}
                        </div>

                        <hr className="border-gray-100" />

                        {/* General Settings */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                General
                            </h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    URL Slug
                                </label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) =>
                                        setFormData({ ...formData, slug: e.target.value })
                                    }
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent outline-none font-mono text-sm text-gray-600 transition-all"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    Automatic from title if left empty on create.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Excerpt
                                </label>
                                <textarea
                                    value={formData.excerpt}
                                    onChange={(e) =>
                                        setFormData({ ...formData, excerpt: e.target.value })
                                    }
                                    rows={4}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm text-gray-600 transition-all resize-none"
                                    placeholder="Write a short summary..."
                                />
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* SEO */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    SEO Configuration
                                </h3>
                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                                    IMPORTANT
                                </span>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Meta Title
                                </label>
                                <input
                                    type="text"
                                    value={formData.seo_title}
                                    onChange={(e) =>
                                        setFormData({ ...formData, seo_title: e.target.value })
                                    }
                                    placeholder={formData.title}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Meta Description
                                </label>
                                <textarea
                                    value={formData.seo_description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, seo_description: e.target.value })
                                    }
                                    rows={3}
                                    placeholder={formData.excerpt}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent outline-none text-sm transition-all resize-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
