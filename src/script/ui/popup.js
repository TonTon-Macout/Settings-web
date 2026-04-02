import { EL } from "@alexgyver/component";
import './popup.css';
import { Config } from "../config";

export default function popup(text, error = true) {
    let popup = EL.make('div', {
        class: 'popup',
        style: {
            background: error ? 'var(--error)' : 'var(--accent)',
        },
        text: text,
        parent: document.getElementsByClassName('popup_cont')[0],
    });
    setTimeout(() => popup.remove(), Config.popupTout);
}