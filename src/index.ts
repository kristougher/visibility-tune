"use strict"
//import styles from '../assets/teacher-tune.module.css';
//import teacherMenuIcon from '../assets/teacher-menu-icon.module.svg';

type PluginConfig = {
    data: boolean
}
export default class TeacherTune {
    data: boolean
    blockContent: any

    constructor({ data }: PluginConfig) {
        if (!data) {
            data = false;
        }
        this.data = data;
    }

    static get isTune() {
        return true;
    }

    wrap(blockContent: HTMLElement) {
        this.blockContent = blockContent;
        blockContent.style.backgroundColor = '';
        blockContent.style.paddingLeft = '';
        blockContent.classList.remove('is-teacher-only');
        if (this.data) {
            blockContent.style.backgroundColor = 'rgb(245,245,245)'; //'<?xml version="1.0" encoding="iso-8859-1"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"	 width="40px" height="40px" viewBox="0 0 31.686 31.686"	 xml:space="preserve"><g>	<g>		<path d="M31.285,7.16h-9.346V6.102h-2.479V7.16h-8.877H9.953v1.275h0.631v3.125l-1.418-0.347c0.085-0.613,0.28-0.962,0.321-1.924			C9.56,7.647,9.655,2.235,4.929,2.235c-0.497,0.001-1.08,0.062-1.333,0.174C3.344,2.523,3.298,2.781,3.134,2.837			c-0.17,0.058-0.412,0.035-0.562,0.106C0.232,4.07,0.313,6.819,0.313,6.819l0.346,5.644L0,18.792l1.481,0.135l0.589-4.547			c0.357,1.208,0.696,2.322,0.696,2.322l-0.389,3.052h2.471v-5.474l-1.334-2.531l0.374-0.095v-1.421			C2.447,9.779,1.385,8.494,1.265,6.936l0.988,0.143v0.604h2.592V7.256h0.457v0.426h2.592V7.093l0.823-0.129			c-0.048,1.305-0.72,3.051-2.724,3.312v1.327H6l0.477,0.227l-1.305,2.349v5.574h1.314H7.73l-0.468-3.146			c0,0,0.194-1.279,0.427-2.626l2.895,0.349v6.688h9.137v2.343l-5.042,5.688h1.812l3.402-3.844v3.844h1.043v-3.84l3.398,3.84h1.841			l-5.071-5.688v-2.343h10.183V8.436h0.399V7.16H31.285z M4.556,7.393H2.541V6.367h2.015V7.393z M7.605,7.393H5.59V6.367h2.016			L7.605,7.393L7.605,7.393z M7.894,6.655V6.079H5.302V6.68H4.845V6.079H2.253v0.562l-1-0.143c0.008-0.074,0.019-0.146,0.026-0.221			c1.042-0.07,2.219-0.891,2.31-2.033c1.319,1.092,3.187,1.145,4.744,1.283C8.526,5.619,8.669,6.01,8.709,6.529L7.894,6.655z			 M30.395,20.08h-9.291h-1.383h-8.245v-5.642l3.427,0.413l0.007-2.229l-3.434-0.843V8.436h18.917V20.08H30.395z"/>		<path d="M7.69,20.08L2.376,20.06l-0.119,3.585h1.644v4.866c-0.75,0.013-1.212,0.13-1.212,0.466c0,0.354,0.73,0.473,0.73,0.473			h0.482h1.156h0.057c0,0,0-0.251,0-0.444c0-0.068-0.018-0.138-0.057-0.197v-5.162h0.614l0.212,2.016l-0.329,3.062			c-0.092,0.08-0.132,0.178-0.132,0.281c0,0.194,0,0.445,0,0.445h0.055h1.166h0.475c0,0,0.73-0.117,0.73-0.473			c0-0.322-0.433-0.442-1.129-0.462l0.233-2.854L6.79,23.645h1.103L7.69,20.08z"/>	</g></g></svg>';
            blockContent.style.paddingLeft = '1em';
            blockContent.classList.add('is-teacher-only');
        }
        return blockContent;
    }

    save() {
        return this.data;
    }

    public render(): HTMLElement {
        const button = window.document.createElement('div');
        const icon = window.document.createElement('div');
        icon.classList.add('ce-popover__item-icon');
        icon.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 64 64"><path d="M62 32.252l-.047-.105c-.045-.353-.146-.574-.335-.723c-1.213-2.565-5.233-10.563-10.638-16.047c-1.496-1.519-5.822 1.914-7.828 3.969c-2.006 2.055-1.029 5.529.182 4.134c1.498-1.725 5.268-7.137 6.666-6.452c1.381.676 4.977 5.914 8.988 13.905c-1.49-.103-4.142-.201-7.242-.201c-4.498 0-8.086.644-11.621 1.265c-3.506.614-5.842 1.047-8.125 1.047c-2.285 0-4.619-.433-8.125-1.047c-3.537-.621-7.123-1.265-11.621-1.265c-3.1 0-5.751.098-7.242.2c4.01-7.99 7.607-13.229 8.988-13.904c1.398-.685 5.166 4.727 6.664 6.452c1.211 1.396 2.189-2.079.182-4.134c-2.006-2.055-6.33-5.488-7.828-3.969C7.615 20.86 3.596 28.859 2.383 31.424c-.189.148-.291.371-.336.723L2 32.252l.031-.011C2 32.565 2 32.988 2 33.551c0 3.338.383 3.919.545 4.117c.219.27.834.643 1.033.928c.293.418.398 1.709.539 2.454C5.234 46.954 6.775 49 15.566 49c8.184 0 12.217-2.43 13.756-8.432c.115-.448.318-2.367.443-2.813c.049-.176.211-.439.637-.505c.568-.054 1.086-.079 1.598-.079s1.027.025 1.598.079c.424.065.588.329.637.505c.123.446.328 2.365.443 2.813C36.217 46.57 40.25 49 48.434 49c8.791 0 10.332-2.046 11.447-7.95c.141-.745.248-2.036.541-2.454c.199-.285.813-.658 1.033-.928c.162-.198.545-.779.545-4.117c0-.563 0-.985-.031-1.31l.031.011m-34.178 6.026a39.419 39.419 0 0 1-.432 1.763c-1.102 4.158-3.535 6.93-11.824 6.93c-8.033 0-8.746-1.676-9.502-6.383c-.281-1.757-.887-3.701-.195-5.334c.385-.908 1.047-2.183 3.371-2.183c1.697 0 10.094.111 15.256 1.223c1.506.327 3.957.893 3.326 3.984m30.112 2.31c-.756 4.707-1.467 6.383-9.5 6.383c-8.291 0-10.723-2.771-11.824-6.93a45.954 45.954 0 0 1-.434-1.763c-.629-3.092 1.822-3.657 3.328-3.984c5.162-1.111 13.559-1.223 15.256-1.223c2.322 0 2.986 1.274 3.369 2.183c.693 1.633.088 3.577-.195 5.334" fill="#000000"></path></svg>';
        const label = window.document.createElement('div');
        label.innerText = 'Teachers only';
        label.classList.add('ce-popover__item-label');
        button.classList.add('ce-popover__item');
        button.appendChild(icon);
        button.appendChild(label);
        button.addEventListener('click', () => {
            this.data = !this.data;
            this.wrap(this.blockContent);
        });
        return button;
    }
}
