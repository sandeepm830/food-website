import { MdBorderAll, MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";




export const categories = [
{
  id :1,
  name : "All",
  image : <MdBorderAll />
},

{
  id :2,
  name : "Breakfast",
  image : <MdFreeBreakfast />
},

{
  id :3,
  name : "Soups",
  image : <LuSoup />
},

{
  id :4,
  name : "Pasta",
  image : <LiaPastafarianismSolid />
},

{
  id :5,
  name : "Main Course",
  image : <FaBowlFood />
},

{
  id :6,
  name : "Pizza",
  image : <FaPizzaSlice />
},

{
  id :7,
  name : "Burger",
  image : <FaHamburger />

}

]


