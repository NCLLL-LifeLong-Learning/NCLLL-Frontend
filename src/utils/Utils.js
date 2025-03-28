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

//Follow Flow Tailwind Responsive
export const antdResponsive = (settings = { xxs: {}, xs: {}, sm: {}, md: {}, lg: {}, xl: {}, xxl: {} }) => {
    const responsive = [];
    if (!_.isEmpty(settings.xxs)) {
        responsive.push({
            breakpoint: 439,
            settings: settings.xxs,
        })
    }

    if (!_.isEmpty(settings.xs)) {
        responsive.push({
            breakpoint: 639,
            settings: settings.xs,
        })
    }

    if (!_.isEmpty(settings.sm)) {
        responsive.push({
            breakpoint: 767,
            settings: settings.sm,
        })
    }

    if (!_.isEmpty(settings.md)) {
        responsive.push({
            breakpoint: 1023,
            settings: settings.md,
        })
    }

    if (!_.isEmpty(settings.lg)) {
        responsive.push({
            breakpoint: 1279,
            settings: settings.lg,
        })
    }

    if (!_.isEmpty(settings.xl)) {
        responsive.push({
            breakpoint: 1535,
            settings: settings.xl,
        })
    }

    if (!_.isEmpty(settings.xxl)) {
        responsive.push({
            breakpoint: 1800,
            settings: settings.xxl,
        })
    }


    return responsive;
}

export const getTreeTitle = (title, isChild, isActive, isParent) => {
    if (isChild) {
        return <div className={`gap-3 px-[10px] menu-tree-child ${isActive && "active"}`}>
            {title}
            {
                isParent &&
                <span className="switcher-icon">
                    <ArrowSvg className="size-[20px] scale-[-1]" color={isActive ? "var(--primary-color)" : "white"} />
                </span>
            }
        </div>
    }
    return <div className={`gap-3 px-[10px] menu-tree-title ${isActive && "active"}`}>
        {title}
        {
            isParent &&
            <span className="switcher-icon">
                <ArrowSvg className={`size-[20px] transition-all ${isActive ? "-rotate-90" : "-rotate-180"}`} color={isActive ? "var(--primary-color)" : "white"} />
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