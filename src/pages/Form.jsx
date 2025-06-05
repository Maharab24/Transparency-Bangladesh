import { UploadCloud } from 'lucide-react';

const Form = () => {
    return (
        <div className="bg-yellow-100 min-h-screen py-10 px-4 mb-14">
            <h1 className="md:text-3xl lg:text-4xl text-2xl text-orange-800 font-bold text-center mb-10">
                Case Management Form
            </h1>

            <div className="border-t border-orange-700 mb-10" />

            <div className="max-w-5xl mx-auto">
                <form className="space-y-10">
                    {/* Name */}
                    <div>
                        <label className="text-orange-700 text-xl font-bold block mb-3">Name</label>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col w-full md:w-1/2">
                                <input type="text" className="input input-bordered w-full" placeholder="" />
                                <span className="text-sm text-orange-800 mt-1">First Name</span>
                            </div>
                            <div className="flex flex-col w-full md:w-1/2">
                                <input type="text" className="input input-bordered w-full" placeholder="" />
                                <span className="text-sm text-orange-800 mt-1">Last Name</span>
                            </div>
                        </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col w-full md:w-1/2">
                            <label className="text-orange-700 text-xl font-bold mb-3">Email</label>
                            <input type="email" className="input input-bordered w-full" placeholder="" />
                            <span className="text-sm text-orange-800 mt-1">example@example.com</span>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2">
                            <label className="text-orange-700 text-xl font-bold mb-3">Phone Number</label>
                            <input type="tel" className="input input-bordered w-full" placeholder="" />
                            <span className="text-sm text-orange-800 mt-1">Please enter a valid phone number.</span>
                        </div>
                    </div>

                    {/* Attorney Info */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-2/3">
                            <label className="text-orange-700 text-xl font-bold mb-3">Attorney Name</label>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="flex flex-col w-full sm:w-1/2 mt-3">
                                    <input type="text" className="input input-bordered w-full" placeholder="" />
                                    <span className="text-sm text-orange-800 mt-1">First Name</span>
                                </div>
                                <div className="flex flex-col w-full sm:w-1/2 mt-3">
                                    <input type="text" className="input input-bordered w-full" placeholder="" />
                                    <span className="text-sm text-orange-800 mt-1">Last Name</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-orange-700 text-xl font-bold mb-3">Attorney Reg Number</label>
                            <input type="text" className="input input-bordered w-full" placeholder="" />
                             <span className="text-sm text-orange-800 mt-1">Enter registration number</span>
                        </div>
                    </div>

                    {/* Case Info */}
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col w-full md:w-1/2">
                            <label className="text-orange-700 text-xl font-bold mb-3">Case</label>
                            <input type="text" className="input input-bordered w-full" placeholder="" />
                             <span className="text-sm text-orange-800 mt-1">Enter case number</span>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2">
                            <label className="text-orange-700 text-xl font-bold mb-3">Case Type</label>
                            <input type="text" className="input input-bordered w-full" placeholder="" />
                            <span className="text-sm text-orange-800 mt-1">Enter case type</span>
                        </div>
                    </div>

                    {/* Brief Summary */}
                    <div className="flex flex-col">
                        <label className="text-orange-700 text-xl font-bold mb-3">Brief Summary</label>
                        <textarea
                            className="textarea textarea-bordered text-orange-800 placeholder:text-orange-700 w-full min-h-[200px]"
                            placeholder="Type here..."
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="bg-yellow-200 border rounded-lg p-4 shadow-md">
                        <label className="text-xl text-orange-800 font-bold block mb-4">Necessary Files</label>
                        <div className="border-2 border-red-800 rounded-md bg-white text-center py-10 px-4 shadow-inner">
                            <UploadCloud className="mx-auto text-red-800 mb-3" size={32} />
                            <label className="text-lg font-bold text-red-900 cursor-pointer block">
                                Browse Files
                                <input
                                    type="file"
                                    multiple
                                    className="hidden"
                                />
                            </label>
                            <p className="text-sm text-red-800 mt-1">Drag and drop files here</p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                        <label className="text-orange-700 text-xl font-bold mb-3 block">Additional Information</label>
                        <textarea
                            className="textarea textarea-bordered text-orange-800 placeholder:text-orange-700 w-full min-h-[150px]"
                            placeholder="Type here..."
                        ></textarea>
                    </div>

                    {/* Submit*/}
                    <div className="pt-8 border-t border-orange-600 text-center">
                        <button
                            type="submit"
                            className="bg-orange-900 text-yellow-100 text-lg px-8 py-3 rounded-md shadow hover:bg-orange-800 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
