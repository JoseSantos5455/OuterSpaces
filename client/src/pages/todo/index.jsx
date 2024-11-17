import { SearchIcon } from "../../components/Icons";
import TableHeader from "../../components/TableHeader";
import ButtonArray from "../../components/ButtonArray";
const Todo = () => {
  return (
    <div className="px-[10px] md:px-[80px] lg:px-[160px] py-[50px] space-y-[35px]">
      <div className="flex items-center pl-[20px] py-[10px] border-[1px] border-gray-40 w-[350px] h-[50px] rounded-[10px] gap-[15px] active:border-blue-500 hover:border-blue-500">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search ..."
          className="border-none text-[18px] text-gray-500 outline-none"
        />
      </div>
      <table>
        <tr>
          <th>
            <TableHeader name="PRIORITY" />
          </th>
          <th>
            <TableHeader name="TIMELINE" />
          </th>
          <th>DESCRIPTION</th>
          <th>
            <TableHeader name="COMPLETION" />
          </th>
          <th className="text-center">ACTION</th>
        </tr>
        <tr>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td>
            <ButtonArray />
          </td>
        </tr>
        <tr className="py-20px">
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td>
            <ButtonArray />
          </td>
        </tr>
        <tr>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td>
            <ButtonArray />
          </td>
        </tr>
        <tr>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td className="text-15px" text-white>
            ddddd
          </td>
          <td>
            <ButtonArray />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Todo;
