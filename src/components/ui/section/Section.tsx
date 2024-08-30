import React from 'react'

interface Props {
    children: React.ReactNode
}

export const Section = ({ children }: Props) => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className='mx-auto max-w-screen-xl '>
                {children}
            </div>
        </section>
    )
}
