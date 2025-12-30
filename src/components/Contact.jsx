import React from "react";
// Importamos MessageCircle para representar o WhatsApp (balão de conversa)
import { Instagram, Mail, MessageCircle } from "lucide-react"; 

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#cbb8a0] text-white py-8 px-">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left items-center">
        
        <div>
          <h3 className="text-white text-2xl font-display">ND</h3>
        </div>

        <div className="text-center">
          <p className="text-white font-display">Nanda Dourado | © Copyright {new Date().getFullYear()}</p>
        </div>

        <div className="flex justify-center ml-4 space-x-2">
          <a href="https://www.instagram.com/nanda_douradofotografia/"target="_blank"rel="noopener noreferrer"className="text-white  transition-transform transform hover:scale-110">
            <Instagram size={28} />
          </a>

          <a href="https://wa.me/5598985308266" target="_blank" rel="noopener noreferrer"className="text-white transition-transform transform hover:scale-110" >
            <MessageCircle size={28} />
          </a>

          <a href="mailto:seuemail@email.com"className="text-white  transition-transform transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}