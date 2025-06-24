import { useState, useRef } from 'react';
import { UploadCloud, X, AlertCircle, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';

const CorruptionReportForm = () => {
  // State declarations
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [witnesses, setWitnesses] = useState([{ name: '', contact: '' }]);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [formData, setFormData] = useState(null); // Store form data for PDF generation

  // Ref declarations
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  // File handling functions
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

  // Witness handling functions
  const addWitness = () => {
    setWitnesses([...witnesses, { name: '', contact: '' }]);
  };

  const removeWitness = (index) => {
    const newWitnesses = [...witnesses];
    newWitnesses.splice(index, 1);
    setWitnesses(newWitnesses);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate reference number (ACC-YYYYMMDD-RANDOM)
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const refNum = `ACC-${datePart}-${randomPart}`;

    // Capture form data before showing success screen
    const formElements = formRef.current.elements;
    const capturedData = {
      fullName: formElements.fullName?.value || '',
      nid: formElements.nid?.value || '',
      mobile: formElements.mobile?.value || '',
      email: formElements.email?.value || '',
      profession: formElements.profession?.value || '',
      address: formElements.address?.value || '',
      division: formElements.division?.value || '', // Added division field
      accusedName: formElements.accusedName?.value || '',
      accusedPosition: formElements.accusedPosition?.value || '',
      accusedOffice: formElements.accusedOffice?.value || '',
      accusedAddress: formElements.accusedAddress?.value || '',
      incidentDate: formElements.incidentDate?.value || '',
      incidentTime: formElements.incidentTime?.value || '',
      incidentLocation: formElements.incidentLocation?.value || '',
      corruptionType: formElements.corruptionType?.value || '',
      amount: formElements.amount?.value || '',
      description: formElements.description?.value || '',
    };

    setFormData(capturedData);
    setReferenceNumber(refNum);
    setSubmitted(true);
  };

  // PDF generation function
  const generatePDF = () => {
    if (!formData) return;

    const pdf = new jsPDF();

    // Add logo and header
    pdf.setFontSize(18);
    pdf.setTextColor(0, 0, 0);
    pdf.text('Anti-Corruption Commission', 105, 20, null, null, 'center');
    pdf.setFontSize(14);
    pdf.setTextColor(120, 53, 15);
    pdf.text('Corruption Report Summary', 105, 30, null, null, 'center');

    // Reference number
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Reference Number: ${referenceNumber}`, 20, 45);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 55);

    let yPosition = 65;

    // Complainant Information
    pdf.setFontSize(14);
    pdf.setTextColor(120, 53, 15);
    pdf.text('Complainant Information', 20, yPosition);
    yPosition += 10;

    const fields = [
      { label: 'Full Name', value: formData.fullName },
      { label: 'NID Number', value: formData.nid },
      { label: 'Mobile', value: formData.mobile },
      { label: 'Email', value: formData.email },
      { label: 'Profession', value: formData.profession },
      { label: 'Address', value: formData.address },
      { label: 'Division', value: formData.division }, // Added division to PDF
    ];

    fields.forEach(field => {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${field.label}: ${field.value || 'N/A'}`, 25, yPosition);
      yPosition += 8;
    });

    yPosition += 5;

    // Accused Information
    pdf.setFontSize(14);
    pdf.setTextColor(120, 53, 15);
    pdf.text('Accused Information', 20, yPosition);
    yPosition += 10;

    const accusedFields = [
      { label: 'Name/Organization', value: formData.accusedName },
      { label: 'Position', value: formData.accusedPosition },
      { label: 'Office/Department', value: formData.accusedOffice },
      { label: 'Address', value: formData.accusedAddress },
    ];

    accusedFields.forEach(field => {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${field.label}: ${field.value || 'N/A'}`, 25, yPosition);
      yPosition += 8;
    });

    yPosition += 5;

    // Incident Details
    pdf.setFontSize(14);
    pdf.setTextColor(120, 53, 15);
    pdf.text('Incident Details', 20, yPosition);
    yPosition += 10;

    const incidentFields = [
      { label: 'Date', value: formData.incidentDate },
      { label: 'Time', value: formData.incidentTime },
      { label: 'Location', value: formData.incidentLocation },
      { label: 'Corruption Type', value: formData.corruptionType },
      { label: 'Amount Involved', value: formData.amount ? `BDT ${formData.amount}` : 'N/A' },
    ];

    incidentFields.forEach(field => {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${field.label}: ${field.value || 'N/A'}`, 25, yPosition);
      yPosition += 8;
    });

    // Description
    const description = formData.description || 'No description provided';
    const splitDescription = pdf.splitTextToSize(description, 170);
    pdf.text('Description:', 25, yPosition);
    yPosition += 8;
    splitDescription.forEach(line => {
      if (yPosition > 280) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.text(line, 30, yPosition);
      yPosition += 8;
    });

    yPosition += 5;

    // Witnesses
    if (witnesses.some(w => w.name || w.contact)) {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFontSize(14);
      pdf.setTextColor(120, 53, 15);
      pdf.text('Witness Information', 20, yPosition);
      yPosition += 10;

      witnesses.forEach((witness, index) => {
        if (witness.name || witness.contact) {
          if (yPosition > 250) {
            pdf.addPage();
            yPosition = 20;
          }

          pdf.setFontSize(12);
          pdf.setTextColor(0, 0, 0);
          pdf.text(`Witness ${index + 1}:`, 25, yPosition);
          yPosition += 8;
          pdf.text(`Name: ${witness.name || 'N/A'}`, 30, yPosition);
          yPosition += 8;
          pdf.text(`Contact: ${witness.contact || 'N/A'}`, 30, yPosition);
          yPosition += 10;
        }
      });
    }

    // Footer
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const footerY = pdf.internal.pageSize.height - 10;
    pdf.text('This document is computer generated and requires no signature', 105, footerY - 10, null, null, 'center');
    pdf.text('For official use only - Anti-Corruption Commission of Bangladesh', 105, footerY, null, null, 'center');

    // Save the PDF
    pdf.save(`corruption-report-${referenceNumber}.pdf`);
  };

  // Reset form
  const resetForm = () => {
    setSubmitted(false);
    setFiles([]);
    setWitnesses([{ name: '', contact: '' }]);
    setFormData(null);
    if (formRef.current) formRef.current.reset();
  };

  // Submitted state UI
  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg text-center">
          <div className="text-green-500 mb-4">
            <CheckCircle size={48} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Report Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your reference number: <span className="font-mono font-bold">{referenceNumber}</span>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={generatePDF}
              className="bg-gradient-to-r from-orange-700 to-orange-600 text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Download PDF
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-100 text-gray-800 font-medium py-3 rounded-xl shadow hover:shadow-lg transition-all"
            >
              Submit Another Report
            </button>
          </div>
          <p className="text-orange-700 text-sm mt-6">
            Save your reference number. Track your report status at{' '}
            <span className="font-semibold">www.acc.org.bd</span> or call the ACC hotline at{' '}
            <span className="font-semibold">16110</span>.
          </p>
        </div>
      </div>
    );
  }

  // Main form UI
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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white rounded-2xl p-6 md:p-8 shadow-lg"
        >
          {/* Complainant Information */}
          <div className="space-y-6">
            <h2 className="text-orange-800 text-xl font-bold border-b pb-2">
              Complainant Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                <input
                  name="fullName"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">National ID (NID) Number <span className="text-red-600">*</span></label>
                <input
                  name="nid"
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
                  name="mobile"
                  type="tel"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  placeholder="01XXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Profession</label>
                <input
                  name="profession"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Address <span className="text-red-600">*</span></label>
              <textarea
                name="address"
                className="textarea textarea-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Added Division Field */}
            <div>
              <label className="block text-orange-700 mb-2">Division</label>
              <select
                name="division"
                className="select select-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
              >
                <option value="">Select Division</option>
                <option value="Barishal">Barishal</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
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
                  name="accusedName"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Position/Designation</label>
                <input
                  name="accusedPosition"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-orange-700 mb-2">Office/Department <span className="text-red-600">*</span></label>
                <input
                  name="accusedOffice"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Address</label>
                <input
                  name="accusedAddress"
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
                  name="incidentDate"
                  type="date"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Time</label>
                <input
                  name="incidentTime"
                  type="time"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
              <div>
                <label className="block text-orange-700 mb-2">Location <span className="text-red-600">*</span></label>
                <input
                  name="incidentLocation"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Corruption Type <span className="text-red-600">*</span></label>
              <select
                name="corruptionType"
                className="select select-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                required
              >
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
                  name="amount"
                  type="number"
                  className="input input-bordered w-full rounded-l-none focus:ring-2 focus:ring-orange-300 transition"
                  placeholder="Amount in Taka"
                />
              </div>
            </div>

            <div>
              <label className="block text-orange-700 mb-2">Detailed Description <span className="text-red-600">*</span></label>
              <textarea
                name="description"
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
                    value={witness.name}
                    onChange={(e) => {
                      const newWitnesses = [...witnesses];
                      newWitnesses[index].name = e.target.value;
                      setWitnesses(newWitnesses);
                    }}
                    className="input input-bordered w-full focus:ring-2 focus:ring-orange-300 transition"
                  />
                </div>
                <div>
                  <label className="block text-orange-700 mb-2">Contact Information</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={witness.contact}
                      onChange={(e) => {
                        const newWitnesses = [...witnesses];
                        newWitnesses[index].contact = e.target.value;
                        setWitnesses(newWitnesses);
                      }}
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