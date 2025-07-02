import dayjs from "dayjs";
import _ from "lodash";
import ArrowSvg from "../assets/svgs/ArrowSvg";

export const showFormatDate = (date) => {
    if (dayjs.isDayjs(date)) {
        date = dayjs(date.$d || date);
    } else {
        date = dayjs(date);
    }
    if (!date.isValid()) {
        return "Invaild Date";
    }

    return date.format("MM-DD-YYYY");
}

// //Follow Flow Tailwind Responsive
// export const antdResponsive = (settings = { xxs: {}, xs: {}, sm: {}, md: {}, lg: {}, xl: {}, xxl: {} }) => {
//     const responsive = [];

//     if (!_.isEmpty(settings.xxl)) {
//         responsive.push({
//             breakpoint: 1800,
//             settings: settings.xxl,
//         })
//     }

//     if (!_.isEmpty(settings.xl)) {
//         responsive.push({
//             breakpoint: 1535,
//             settings: settings.xl,
//         })
//     }

//     if (!_.isEmpty(settings.lg)) {
//         responsive.push({
//             breakpoint: 1279,
//             settings: settings.lg,
//         })
//     }

//     if (!_.isEmpty(settings.md)) {
//         responsive.push({
//             breakpoint: 1023,
//             settings: settings.md,
//         })
//     }

//     if (!_.isEmpty(settings.xs)) {
//         responsive.push({
//             breakpoint: 639,
//             settings: settings.xs,
//         })
//     }

//     if (!_.isEmpty(settings.sm)) {
//         responsive.push({
//             breakpoint: 767,
//             settings: settings.sm,
//         })
//     }

//     if (!_.isEmpty(settings.xxs)) {
//         responsive.push({
//             breakpoint: 439,
//             settings: settings.xxs,
//         })
//     }

//     return responsive;
// }
export const antdResponsive = (settings = { xxs: {}, xs: {}, sm: {}, md: {}, lg: {}, xl: {}, xxl: {} }) => {
    const responsive = [];

    if (!_.isEmpty(settings.xxl)) {
        responsive.push({
            breakpoint: 1800, // Ensure this matches your actual screen width needs
            settings: settings.xxl,
        });
    }

    if (!_.isEmpty(settings.xl)) {
        responsive.push({
            breakpoint: 1536, // Fixed to match standard xl breakpoint
            settings: settings.xl,
        });
    }

    if (!_.isEmpty(settings.lg)) {
        responsive.push({
            breakpoint: 1280, // Fixed to match lg breakpoint
            settings: settings.lg,
        });
    }

    if (!_.isEmpty(settings.md)) {
        responsive.push({
            breakpoint: 1024, // Fixed to match md breakpoint
            settings: settings.md,
        });
    }

    if (!_.isEmpty(settings.sm)) {
        responsive.push({
            breakpoint: 768, // Fixed to match sm breakpoint
            settings: settings.sm,
        });
    }

    if (!_.isEmpty(settings.xs)) {
        responsive.push({
            breakpoint: 640, // Fixed to match xs breakpoint
            settings: settings.xs,
        });
    }

    if (!_.isEmpty(settings.xxs)) {
        responsive.push({
            breakpoint: 440, // Fixed to match xxs breakpoint
            settings: settings.xxs,
        });
    }

    return responsive;
};



export const getTreeTitle = (title, isChild, isActive, isParent, lang) => {
    if (isChild) {
        return <div className={`gap-3 px-[0.625rem] menu-tree-child ${isActive && "active"}`}
            style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
        >
            {title}
            {
                isParent &&
                <span className="switcher-icon">
                    <ArrowSvg className="size-[1.25rem] scale-[-1]" color={isActive ? "var(--primary-color)" : "white"} />
                </span>
            }
        </div>
    }
    return <div className={`gap-3 px-[0.625rem] menu-tree-title ${isActive && "active"}`}
        style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
    >
        {title}
        {
            isParent &&
            <span className="switcher-icon">
                <ArrowSvg className={`size-[1.25rem] transition-all ${isActive ? "-rotate-90" : "-rotate-180"}`} color={isActive ? "var(--primary-color)" : "white"} />
            </span>
        }
    </div>
}

export const convertToKhmerDate = (date) => {
    // Khmer month names
    const khmerMonths = [
        "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
        "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"
    ];

    // Khmer numerals mapping
    const khmerNumbers = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

    // Function to convert Arabic numbers to Khmer numerals
    const toKhmerNumbers = (num) => num.toString().split('').map(digit => khmerNumbers[digit]).join('');

    // Convert date to Khmer format
    function formatKhmerDate(date) {
        const day = toKhmerNumbers(dayjs(date).format('DD')); // Convert day to Khmer
        const monthIndex = parseInt(dayjs(date).format('M'), 10) - 1; // Get month index
        const year = toKhmerNumbers(dayjs(date).format('YYYY')); // Convert year to Khmer

        return `${day} ${khmerMonths[monthIndex]} ${year}`;
    }


    return formatKhmerDate(date);
}

export function formatEnglishDate(date) {
    return dayjs(date).format('DD MMMM YYYY'); // Example: 14 August 1963
}


export const objectToQuery = (uri, obj) => {
    const flattenObject = (prefix, value) => {
        if (_.isObject(value) && !Array.isArray(value)) {
            return Object.keys(value)
                .flatMap(key => flattenObject(`${prefix}[${encodeURIComponent(key)}]`, value[key]))
                .join('&');
        }
        return `${prefix}=${encodeURIComponent(value)}`;
    };

    const cleanedObj = _.omitBy(obj, value => value === null || value === undefined || value === '' || value === false || Number.isNaN(value) || (Array.isArray(value) && value.length === 0));

    const queryString = Object.keys(cleanedObj)
        .flatMap(key => {
            const value = cleanedObj[key];

            if (Array.isArray(value)) {
                return value.map(item => {
                    if (_.isObject(item)) {
                        return Object.keys(item)
                            .map(subKey => `${encodeURIComponent(key)}[${encodeURIComponent(subKey)}]=${encodeURIComponent(item[subKey])}`)
                            .join('&');
                    }
                    return `${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`;
                });
            } else if (_.isObject(value)) {
                return flattenObject(encodeURIComponent(key), value);
            }

            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join('&');

    return queryString ? `${uri}?${queryString}` : uri;
};