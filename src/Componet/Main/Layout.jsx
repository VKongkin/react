import { Outlet, NavLink } from 'react-router-dom'
import React from 'react'
import './Style.css'

export const Layout = () => {
    return (
        <div className='Main'>
            <nav className=" flex justify-around">
                <img className='h-[50px]' src="data:image/png;base64,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" alt="" />

                <ul className=' flex  items-center gap-4 outline-none'>
                    <li >
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Bloge" className={({ isActive }) => isActive ? 'active' : undefined}>Bloge</NavLink>

                    </li>
                    <li>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>

                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2M6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-2.215-15.072c.158-.166.158-.28-.01-.438c-.325-.308-.653-.614-.978-.922l-1.508-1.431c-.13-.124-.263-.246-.394-.369c-.074-.07-.157-.102-.263-.076a1.03 1.03 0 0 1-.273.043c-.142-.004-.216.07-.283.178c-.555.89-1.113 1.779-1.67 2.668c-.272.436-.546.872-.817 1.31c-.119.193-.037.355.19.385l1.133.148c.497.064.993.13 1.49.19c.241.029.315.095.344.332c.022.181.046.362.074.542c.018.117.117.198.247.219c.06-.04.132-.072.182-.124c.298-.308.59-.621.885-.93zm11.09 2.319c-.398-.336-.803-.664-1.193-1.008c-.163-.144-.325-.203-.536-.136a.547.547 0 0 1-.418-.034c-.176-.09-.325-.06-.485.044c-.758.49-1.52.973-2.28 1.458l-1.358.868c-.112.072-.195.161-.199.302l-.034 1.195a.473.473 0 0 0 .135.394c.248.285.494.573.74.86l.593.684a.327.327 0 0 0 .215.123c.235.027.409-.12.406-.355c-.002-.205-.015-.41-.023-.614a.343.343 0 0 1 .125-.282a1.31 1.31 0 0 1 .148-.109l1.643-1.065c.85-.551 1.7-1.104 2.55-1.654c.144-.093.212-.217.187-.386c-.02-.133-.122-.207-.215-.285zm-7.298.992c-.402-.405-.81-.803-1.215-1.205l-1.799-1.79a.386.386 0 0 0-.562.028c-.45.475-.901.949-1.352 1.422c-.418.437-.834.875-1.255 1.309c-.187.191-.184.43.012.608c.35.32.689.653 1.033.98c.06.058.125.113.187.17a.33.33 0 0 0 .24.095h.196c.266-.014.554-.032.843-.043c.489-.02.978-.033 1.467-.056c.121-.005.254-.01.36-.06c.59-.272 1.174-.557 1.76-.84c.175-.084.25-.211.212-.397a.47.47 0 0 0-.127-.221m2.478-8.049c.091.14.176.286.263.43c.77 1.267 1.543 2.533 2.308 3.803a.49.49 0 0 0 .807.055c.523-.705 1.053-1.406 1.577-2.11a.664.664 0 0 0 .154-.398l.022-.01c-.037-.085-.062-.178-.112-.255c-.372-.572-.749-1.142-1.125-1.712c-.178-.27-.355-.543-.535-.812c-.104-.156-.254-.243-.443-.21c-.857.15-1.712.313-2.57.456c-.321.053-.54.465-.346.763m-1.505 3.532l.152-1.324l.13-1.13l.1-.88c-.01-.018-.027-.079-.061-.09c-.041-.014-.099.01-.146.026c-.023.008-.04.035-.058.055l-.656.69c-.446.468-.89.937-1.337 1.405l-1.958 2.049c-.137.143-.136.185.006.317c.428.4.855.8 1.28 1.203c.49.462.979.927 1.468 1.39c.136.13.271.26.413.383c.032.027.096.047.132.033c.036-.014.069-.07.078-.112c.019-.088.02-.18.03-.271l.148-1.301c.042-.37.087-.739.129-1.108zm3.806 1.02c-.174-.283-.344-.568-.516-.852l-1.955-3.216c-.053-.088-.103-.179-.164-.261c-.023-.03-.08-.059-.115-.053c-.033.006-.062.055-.088.088c-.01.014-.01.036-.014.055l-.099.71l-.262 1.906l-.27 1.951l-.247 1.782l-.11.808c.01.031.014.096.046.142c.057.084.164.09.268.023c.263-.166.525-.333.787-.501c.834-.534 1.667-1.069 2.504-1.6c.107-.067.159-.144.147-.27a.617.617 0 0 1 .092-.404c.07-.107.06-.205-.004-.309zm-4.053-4.904l-.725.127l-2.97.521l-2.515.44c-.262.045-.524.09-.785.137c-.143.025-.215.096-.225.221c-.007.092.043.157.106.217c.472.443.944.886 1.414 1.33c.484.457.967.917 1.45 1.375c.155.148.276.148.425-.008c.415-.434.827-.871 1.241-1.306l1.982-2.074l.68-.715c.05-.053.094-.115.045-.181c-.032-.043-.092-.064-.123-.084m-6.739.632c-.04.028-.073.066-.11.099l.022.041c.037 0 .074.006.11 0l2.57-.462l2.354-.423c.663-.119 1.326-.24 1.99-.358c.09-.016.14-.06.173-.144a1.34 1.34 0 0 1 .138-.248c.042-.062.064-.12.03-.19l-.119-.26c-.309-.666-.618-1.333-.929-1.999c-.075-.162-.17-.183-.32-.081l-4.51 3.072c-.467.317-.933.634-1.399.953m-4.69 1.526c.057-.013.114-.02.168-.039c.801-.285 1.602-.573 2.404-.855a.36.36 0 0 0 .249-.26a.692.692 0 0 1 .512-.51a.434.434 0 0 0 .3-.255c.276-.573.558-1.144.836-1.716c.152-.312.304-.623.451-.937a.359.359 0 0 0-.034-.389a.348.348 0 0 0-.354-.144a.638.638 0 0 0-.201.08c-.976.562-1.95 1.126-2.926 1.687a.659.659 0 0 0-.25.245c-.366.629-.736 1.256-1.104 1.885c-.128.217-.26.431-.379.653c-.141.263.034.55.329.555zm4.153-1.826c-.004.075.063.117.133.087c.031-.014.06-.035.088-.054l1.18-.804l3.694-2.513l.618-.421c.08-.054.142-.118.135-.215c0-.159-.112-.257-.274-.25c-.227.011-.454.027-.68.036l-1.93.073c-.327.013-.654.03-.981.04c-.124.005-.197.06-.247.17c-.215.479-.436.956-.654 1.434c-.35.766-.7 1.531-1.048 2.297a.346.346 0 0 0-.034.12m-1.363 1.65c.032-.05.071-.103.024-.166c-.052-.07-.115-.042-.178-.023l-.265.082l-2.015.64c-.356.113-.712.226-1.068.341c-.119.039-.16.093-.162.22c.006.023.017.071.033.118l.67 1.882c.076.215.151.43.232.644c.05.134.19.187.296.11a.425.425 0 0 0 .101-.121l1.84-2.94c.164-.263.329-.524.492-.787m16.118 2.609c-.077-.438-.155-.875-.231-1.313c-.022-.129-.09-.22-.222-.25c-.126-.027-.225.023-.3.126l-.225.303c-.369.497-.736.995-1.106 1.49c-.08.109-.101.218-.039.341c.065.128.07.266.046.402c-.024.136.02.235.122.32c.453.379.906.758 1.357 1.139c.22.185.438.121.514-.154l.265-.956c.016-.059.026-.119.037-.168c-.006-.049-.01-.087-.016-.124zm-7.564-7.944l.545 1.182c.143.307.288.613.43.92c.034.076.08.13.17.133c.247.01.44.12.597.303c.028.032.072.049.095.064l.08-.016c.806-.145 1.613-.291 2.42-.435c.074-.013.137-.03.151-.114c.014-.084-.04-.123-.106-.156l-.597-.3l-3.362-1.68c-.083-.04-.162-.09-.25-.118a.24.24 0 0 0-.17.011c-.06.034-.05.104-.022.164z" /></svg>
                </ul>

            </nav>

            <Outlet />
        </div >

    )
}
