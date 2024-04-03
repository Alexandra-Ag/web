import { useState } from "react";

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const Open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    
    return [isOpen, Open, close];
}
