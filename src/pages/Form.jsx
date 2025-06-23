import { useState, useRef } from 'react';
import { UploadCloud, X, AlertCircle } from 'lucide-react';

const CorruptionReportForm = () => {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [witnesses, setWitnesses] = useState([{ name: '', contact: '' }]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const addWitness = () => {
    setWitnesses([...witnesses, { name: '', contact: '' }]);
  };

  const removeWitness = (index) => {
    const newWitnesses = [...witnesses];
    newWitnesses.splice(index, 1);
    setWitnesses(newWitnesses);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen py-10 px-4 mb-14">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-orange-900 font-bold mb-3">
            Corruption Reporting Form
          </h1>
          <p className="text-orange-700 max-w-2xl mx-auto">
            Complete this form to report corruption incidents. All information will be kept confidential.
          </p>
          <div className="border-t border-orange-300 mt-6 mx-auto w-24" />
        </header>

        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <div className="flex items-start">
            <AlertCircle className="mr-2 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-bold">Important Notice</p>
              <p className="text-sm">
                Filing false reports is punishable by law. Ensure you have
                <span className="font-semibold"> supporting evidence </span>
                before submitting your report.
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Complainant Information */}
          <div className="space-y-6">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Complainant Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">National ID (NID) Number <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Mobile Number <span className="text-red-600">*</span></label>
                <input
                  type="tel"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  placeholder="01XXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Profession</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Address <span className="text-red-600">*</span></label>
              <textarea
                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* Accused Information */}
          <div className="space-y-6">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Accused Party Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Full Name/Organization <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Position/Designation</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Office/Department <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Address</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>
          </div>

          {/* Incident Details */}
          <div className="space-y-6">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Corruption Incident Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Date <span className="text-red-600">*</span></label>
                <input
                  type="date"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Time</label>
                <input
                  type="time"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Location <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Corruption Type <span className="text-red-600">*</span></label>
              <select className="select select-bordered w-full focus:ring-2 focus:ring-orange-300 transition" required>
                <option value="">Select type</option>
                <option value="bribe">Bribery</option>
                <option value="embezzlement">Embezzlement</option>
                <option value="abuse">Abuse of Power</option>
                <option value="favoritism">Favoritism</option>
                <option value="fraud">Fraud</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Amount Involved (if applicable)</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  BDT
                </span>
                <input
                  type="number"
                  className="input input-bordered w-full rounded-l-none focus:ring-2 focus:ring-orange-300 transition"
                  placeholder="Amount in Taka"
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Detailed Description <span className="text-red-600">*</span></label>
              <textarea
                className="textarea textarea-bordered w-full min-h-[150px] focus:ring-2 focus:ring-orange-300 transition"
                placeholder="Describe the incident in detail..."
                required
              ></textarea>
            </div>
          </div>

          {/* Witness Information */}
          <div className="space-y-6">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Witness Information (if available)
            </h2>

            {witnesses.map((witness, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end border-b pb-4">
                <div>
                  <label className="block text-orange-700 mb-2">Witness Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-orange-700 mb-2">Contact Information</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                      placeholder="Mobile/Email"
                    />
                    {witnesses.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeWitness(index)}
                        className="btn btn-ghost text-red-600 ml-2"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addWitness}
              className="btn btn-outline btn-sm text-orange-700 border-orange-300 hover:bg-orange-50"
            >
              + Add Another Witness
            </button>
          </div>

          {/* Evidence Section */}
          <div className="space-y-4">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Attach Evidence
            </h2>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-orange-700 text-sm mb-3">
                <span className="font-bold">Acceptable Evidence:</span> Scanned documents, photos, videos, audio recordings,
                bank statements, email threads (PDF, JPG, MP3, MP4 - Max 10MB per file)
              </p>

              <div
                className={`border-2 ${dragging ? 'border-orange-500 bg-yellow-100' : 'border-orange-300'} rounded-xl p-6 text-center cursor-pointer transition-all duration-300`}
                onClick={triggerFileInput}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <UploadCloud className={`mx-auto mb-3 ${dragging ? 'text-orange-600 scale-110' : 'text-orange-400'} transition-transform`} size={40} />
                <p className="font-medium text-orange-700 mb-1">
                  {dragging ? 'Drop files here' : 'Click or drag files to upload'}
                </p>
                <p className="text-sm text-orange-600">
                  Maximum 5 files allowed
                </p>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.mp3,.mp4"
                />
              </div>
            </div>

            {/* File previews */}
            {files.length > 0 && (
              <div className="space-y-3 mt-4">
                <p className="text-orange-700 font-medium">Uploaded Files:</p>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-center truncate">
                      <div className="bg-orange-100 p-2 rounded-md mr-3">
                        <UploadCloud size={18} className="text-orange-600" />
                      </div>
                      <span className="text-orange-800 truncate">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-orange-600 hover:text-orange-800 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Declaration */}
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-start">
              <input
                type="checkbox"
                className="checkbox checkbox-warning mt-1 mr-3"
                id="declaration"
                required
              />
              <label htmlFor="declaration" className="text-orange-800">
                I declare that the information provided is true and accurate. I understand that providing false information is
                <span className="font-bold"> punishable by law</span> under
                <span className="font-bold"> Anti-Corruption Commission Act 2004</span>
                and <span className="font-bold">Penal Code 1860</span> of Bangladesh, and I consent to legal proceedings.
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-700 to-orange-600 text-white font-medium px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:from-orange-800 hover:to-orange-700 transition-all duration-300"
            >
              Submit Report
            </button>
            <p className="text-orange-700 text-sm mt-4">
              After submission, save your reference number. Track your report status at
              <span className="font-semibold"> www.acc.org.bd</span> or call the ACC hotline at
              <span className="font-semibold"> 16110</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorruptionReportForm;