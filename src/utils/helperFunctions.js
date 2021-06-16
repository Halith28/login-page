/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2020-11-27
 * @modify date 2021-01-25
 * @desc Collection of all helper functions.
 */
/**
 * The below function convert the normal array of object to 
 * {label: "",value:1} pair which is suitable for React Select
 * component.
 */
export let ConvertToReactSelect = (data, valueKey, labelKey) => {
    if (!data || !data?.length) {
        return [];
    }

    return data.map((val) => {
        return {
            ...val,
            value: val[valueKey],
            label: val[labelKey],
        };
    });
};

/**
 * The below function convert the uploaded file to base64 file.
 */
export let ToBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

/**
 * The below function capitalize the given string.
 */
export let CapitalizeString = (string) => {
    if (!string) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * The below function convert the HEX code to RGBA
 */
export let ConvertHexToRGBA = (hex, opacity) => {
    if (hex) {
        let tempHex = hex.replace("#", "");
        let r = parseInt(tempHex.substring(0, 2), 16);
        let g = parseInt(tempHex.substring(2, 4), 16);
        let b = parseInt(tempHex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity / 100})`;
    }
    return null;
};

/**
 * The below function will open an document node in a full screen. 
 */
export let OpenFullScreen = (id) => {
    let elem = document.getElementById(id);
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};

/**
 * The below function will close the full screen of an document
 * node.
 */
export let CloseFullScreen = (id) => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

/**
 * The below function will scroll the page to the Top.
 */
export let ScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}