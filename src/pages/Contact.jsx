import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = ()=> {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        alert("Message sent! Thank you for contacting us.");
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }   
    return (
        <div className="w-full max-w-6xl mx-auto my-10 bg-white rounded shadow">
          <h1 className="font-bold text-left pl-5 text-3xl text-green-900">Get in Touch</h1> 
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5">
            <div >
              <form onSubmit={handleSubmit} className="space-y-4 h-96 mx-2 p-4  rounded">
                <label htmlFor="name">Name:</label>
                <input 
                    name="name" 
                    placeholder="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-gray-100 rounded-lg p-2"
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full  rounded-lg bg-gray-100 p-2"
                />
                <label htmlFor="message">Message:</label>
                <textarea 
                    placeholder="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-gray-100 rounded-lg p-2"
                />
                <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded-lg">Send Message</button>
              </form>
            </div>
            <div className="space-y-4 mt-2 flex flex-col p-2 text-white rounded bg-green-900">
              <h4 className="mt-8">Secretariat</h4>
              <p>Abuja:</p>
              <p>The Presidency, Aso Rock Villa, Asokoro, FCT Abuja,Revenue House, 15 Sokode Crescent, Wuse Zone 5, FCT Abuja</p>
              <p>Lagos:</p>
              <p>Floor 7 Mulliner Towers, 39 Alfred Rewane Road, Ikoyi , Lagos</p>
              <div>
                <a href="mailto:info@fiscalreform.org" className="inline-flex items-center gap-2 px-8 py-4  text-white"><FiMail size={20}/> info@fiscalreform.org</a>
                <a href="https://wa.me/2348109753151?text=Hi%20,%20I%20would%20like%20to%20discuss%20a%20more." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-8 py-4  text-white  "><FaWhatsapp size={20}/> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Contact;