import { useState } from "react"
import hero from "../assets/hero.png"
import { nav } from "./content"
import menu from "../assets/menu.svg"
import cross from "../assets/cross.svg"
import { useNavigate } from "react-router-dom"

function Nav() {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center md:px-14 md:pt-6 bg-back font-family cursor-pointer sticky z-10 top-0">
            <div className="flex items-center font-extrabold" onClick={()=> {window.scrollTo({top:0,left:0,behavior:"smooth"}) ; setActive(""); navigate("/")}}>
                <img src={hero} alt="" width={90} className="rounded-full" />
                <div className="text-white text-xl">Portfolio</div>
            </div>
            <ul className="flex gap-10">
                {nav.map((items, index) =>
                    <li key={index} className={`text-xl hidden md:block hover:text-white transition duration-300 ease-in-out ${(active === items.text) ? "text-white" : "text-slate-300"}`} onClick={() => setActive(items.text)}>
                        <a href={`#${items.link}`}>{items.text}</a>
                    </li>
                )}
            </ul>
            {
                toggle ?
                    <div className="md:hidden" >
                        <img src={cross} alt="" className="cursor-pointer m-2" onClick={()=>setToggle(false)}/>
                        <ul className="absolute p-5 backdrop-blur-none bg-gradient-to-r from-gray-400 to-black backdrop-opacity-10 rounded-lg right-1">
                            {nav.map((items, index) =>
                                <li key={index} className={`hover:text-white py-3 ${(active === items.text) ? "text-white" : "text-slate-300"}`} onClick={() =>{ setActive(items.text); setToggle(false)}}>
                                    <a href={`#${items.link}`}>{items.text}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    :
                    <img src={menu} alt="" className="cursor-pointer m-2 md:hidden" onClick={() => setToggle(true)} />
            }

        </div>
    )
}

export default Nav