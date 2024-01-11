import { createPortal } from "react-dom";

export function ModalParent({children}) {
    return createPortal(children, document.getElementById('modal-element'))
}
