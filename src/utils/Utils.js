import dayjs from "dayjs";
import _ from "lodash";

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

export const getTreeTitle = (title, isChild, isActive) => {
    if (isChild) {
        return <div className={`menu-tree-child ${isActive && "active"}`}>{title}</div>
    }
    return <div className={`menu-tree-title ${isActive && "active"}`}>{title}</div>
}