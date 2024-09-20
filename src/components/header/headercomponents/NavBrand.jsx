import { TbBriefcase } from "react-icons/tb";

const NavBrand = () => {
    return (
        <div className="brand flex items-center gap-2">
            <div className="text-orange-400"><TbBriefcase size={24} /></div>
            <div className="text-xl font-bold text-slate-300">Pixels Jobs</div>
        </div>
    )
}

export default NavBrand