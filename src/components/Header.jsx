import image from "../assets/image.png"

const Header = () => {
  return (
    <header className=" px-4 py-4 md:px-16 bg-green-950 overflow-hidden top-0 z-50">
      <div className="flex justify-between items-center">
        <div><img src={image} alt="tax" width={150} height={150} loading="lazy" decoding="async"></img></div>
        <div><h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">Presidential Fiscal Policy and Tax Reforms Committee</h1></div>
      </div>
    </header>
  )
};
export default Header;