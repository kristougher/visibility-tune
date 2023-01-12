"use strict"
import { API } from '@editorjs/editorjs';
import styles from '../assets/teacher-tune.module.css';
//import '../assets/teacher-icon.svg';

interface PluginConfig {
    api: API
    data: boolean
}

export class TeacherTune {
    api: any
    data: any
    isTeacherOnly: boolean
    blockContent: HTMLElement

    constructor({ api, data }: PluginConfig) {
        this.api = api;
        this.isTeacherOnly = data;
        this.blockContent = new HTMLElement;
    }

    static get isTune() {
        return true;
    }

    wrap(blockContent: HTMLElement) {
        this.blockContent = blockContent;
        blockContent.classList.remove('is-teacher-only');
        if (this.isTeacherOnly) {
            blockContent.classList.add('is-teacher-only');
        }
        return blockContent;
    }

    save() {
        return this.isTeacherOnly;
    }

    render() {
        return {
            icon: '<svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M62 32.252l-.047-.105c-.045-.353-.146-.574-.335-.723c-1.213-2.565-5.233-10.563-10.638-16.047c-1.496-1.519-5.822 1.914-7.828 3.969c-2.006 2.055-1.029 5.529.182 4.134c1.498-1.725 5.268-7.137 6.666-6.452c1.381.676 4.977 5.914 8.988 13.905c-1.49-.103-4.142-.201-7.242-.201c-4.498 0-8.086.644-11.621 1.265c-3.506.614-5.842 1.047-8.125 1.047c-2.285 0-4.619-.433-8.125-1.047c-3.537-.621-7.123-1.265-11.621-1.265c-3.1 0-5.751.098-7.242.2c4.01-7.99 7.607-13.229 8.988-13.904c1.398-.685 5.166 4.727 6.664 6.452c1.211 1.396 2.189-2.079.182-4.134c-2.006-2.055-6.33-5.488-7.828-3.969C7.615 20.86 3.596 28.859 2.383 31.424c-.189.148-.291.371-.336.723L2 32.252l.031-.011C2 32.565 2 32.988 2 33.551c0 3.338.383 3.919.545 4.117c.219.27.834.643 1.033.928c.293.418.398 1.709.539 2.454C5.234 46.954 6.775 49 15.566 49c8.184 0 12.217-2.43 13.756-8.432c.115-.448.318-2.367.443-2.813c.049-.176.211-.439.637-.505c.568-.054 1.086-.079 1.598-.079s1.027.025 1.598.079c.424.065.588.329.637.505c.123.446.328 2.365.443 2.813C36.217 46.57 40.25 49 48.434 49c8.791 0 10.332-2.046 11.447-7.95c.141-.745.248-2.036.541-2.454c.199-.285.813-.658 1.033-.928c.162-.198.545-.779.545-4.117c0-.563 0-.985-.031-1.31l.031.011m-34.178 6.026a39.419 39.419 0 0 1-.432 1.763c-1.102 4.158-3.535 6.93-11.824 6.93c-8.033 0-8.746-1.676-9.502-6.383c-.281-1.757-.887-3.701-.195-5.334c.385-.908 1.047-2.183 3.371-2.183c1.697 0 10.094.111 15.256 1.223c1.506.327 3.957.893 3.326 3.984m30.112 2.31c-.756 4.707-1.467 6.383-9.5 6.383c-8.291 0-10.723-2.771-11.824-6.93a45.954 45.954 0 0 1-.434-1.763c-.629-3.092 1.822-3.657 3.328-3.984c5.162-1.111 13.559-1.223 15.256-1.223c2.322 0 2.986 1.274 3.369 2.183c.693 1.633.088 3.577-.195 5.334" fill="#000000"></path></svg>',
            label: 'Teacher only',
            onActivate: () => {
                this.isTeacherOnly = !this.isTeacherOnly;
                this.wrap(this.blockContent);
            }
        };
    }
}
