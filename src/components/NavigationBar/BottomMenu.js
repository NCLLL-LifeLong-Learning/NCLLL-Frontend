import React from 'react'

export default function BottomMenu({ onMouseLeave, height, menuHover, value, children }) {
    return (
        <div
            onMouseLeave={onMouseLeave}
            style={{
                background: "var(--submenu-background)",
                height: `${ height }px`,
                marginBottom: `-${ menuHover === value ? height : 0 }px`,
            }}
            className={"submenu-container hidden lg:block"}
        >
            {children}
        </div>
    )
}
