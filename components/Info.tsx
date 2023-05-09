import Image from "next/image"
const Info = () => {
    return (
        <div className="p-6 block bg-[var(--bg-color)]  relative">
            <div className="absolute rounded-full bottom-[80%] right-[50%] translate-x-[50%] bg-gradient1 w-44 h-44 flex justify-center items-center">
                <Image src="/logo-low-white-black.png" className="w-36 h-36 rounded-full " alt='profile' height={300} width={300} />
            </div>
            <div className="leading-9 pt-10">
                <h1 className="text-[2rem] text-bg-gradient font-extrabold mb-2">DateTech Software</h1>
                <h2 className="text-lg font-bold">Web Applications, Creative Itmes, Online Solutions, Logo, Banner, Posters, Social Media Advertiesing</h2>
                <h2 className="text-2xl font-bold text-[var(--themeColor)] flex gap-4"></h2>
            </div>
        </div>
    )
}

export default Info