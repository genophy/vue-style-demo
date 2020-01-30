/**
 * FileDesc  :
 * Author    :  g_eno_phy
 * Date      :
 * Version   :
 */

export default class CommonsUtil {

    static randomStrId() {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            let randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 19) + i);
            temp.push(randomChar);
        }
        return temp.reduce((pre, next) => pre + next);
    }


    static getIeVersionNum() {
        const browser = navigator.appName;
        const b_version = navigator.appVersion;
        const version = b_version.split(';');
        if (!version[1]) {
            return 99;
        }
        const trim_Version = version[1].replace(/[ ]/g, '');

        if (browser === 'Microsoft Internet Explorer' && trim_Version === 'MSIE6.0') {
            return 6;
        } else if (browser === 'Microsoft Internet Explorer' && trim_Version === 'MSIE7.0') {
            return 7;
        } else if (browser === 'Microsoft Internet Explorer' && trim_Version === 'MSIE8.0') {
            return 8;
        } else if (browser === 'Microsoft Internet Explorer' && trim_Version === 'MSIE9.0') {
            return 9;
        } else if (browser === 'Microsoft Internet Explorer' && trim_Version === 'MSIE10.0') {
            return 10;
        }
        return 99;
    }


    static valueAble(obj) {
        return undefined !== obj && obj !== null &&
            (obj instanceof Array ? obj.length > 0 : obj !== '');
    }


    static clearAllStorage() {
        window.localStorage.clear();
        window.sessionStorage.clear();
    }

    static debounceObjs = {};


    static debounce(id, fn, timeout = 1000, isImmediate = false) {
        if (!id) {
            return;
        }

        if (CommonsUtil.debounceObjs[id]) {
            clearTimeout(CommonsUtil.debounceObjs[id]);
        } else if (isImmediate && typeof fn === 'function') {
            fn();
        }
        CommonsUtil.debounceObjs[id] = setTimeout(() => {

            if (!isImmediate && typeof fn === 'function') {
                fn();
            }
            if (CommonsUtil.debounceObjs[id]) {
                clearTimeout(CommonsUtil.debounceObjs[id]);
            }
            CommonsUtil.debounceObjs[id] = null;
        }, timeout);
    }
}
