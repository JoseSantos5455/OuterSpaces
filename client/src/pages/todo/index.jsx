import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { server_url } from "../../util";
import { SearchIcon } from "../../components/Icons";
import TableHeader from "../../components/TableHeader";
import ButtonArray from "../../components/ButtonArray";

const isPriority = {
  id: 1,
  flag: false,
};

const isTimeline = {
  id: 2,
  flag: false,
};

const isProgress = {
  id: 3,
  flag: false,
};

const Todo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState({ id: 0, flag: false });
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getList = async () => {
      let res = await axios.post(`${server_url}/api/todo/getlist`, {
        sortKey,
        keyword,
      });
      console.log(res.data);
      setData(res.data);
    };
    getList();
  }, [sortKey, keyword]);

  const readData = (id) => {
    navigate(`/todo/read/${id}`);
  };

  const editData = (id) => {
    navigate(`/todo/edit/${id}`);
  };

  const deleteData = async (id) => {
    try {
      let res = await axios.delete(`${server_url}/api/todo/delete/${id}`);
      setData((data) => {
        data = data.filter((item) => item._id !== id);
        return data;
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getSortList = async (_sortKey) => {
    setSortKey(_sortKey);
  };

  return (
    <div className="px-[10px] md:px-[80px] lg:px-[160px] py-[50px] space-y-[35px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-[20px] py-[10px] border-[1px] border-gray-40 w-[350px] h-[50px] rounded-[10px] gap-[15px] active:border-blue-500 hover:border-blue-500">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search ..."
            className="border-none text-[18px] text-gray-500 outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <Link to="/todo/add">
          <button className="header-btn h-[40px] bg-blue-100">Add</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th className="font-normal bg-blue-100 bg-opacity-50 pl-7">
              <TableHeader
                name="Priority"
                sortList={getSortList}
                sort={isPriority}
              />
            </th>
            <th className="font-normal bg-blue-100 bg-opacity-50">
              <TableHeader
                name="Timeline"
                sortList={getSortList}
                sort={isTimeline}
              />
            </th>
            <th className="font-normal bg-blue-100 bg-opacity-50">
              Description
            </th>
            <th className="font-normal bg-blue-100 bg-opacity-50">
              <TableHeader
                name="Completion"
                sortList={getSortList}
                sort={isProgress}
              />
            </th>
            <th className="text-center font-normal bg-blue-100 bg-opacity-50">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, idx) => (
            <tr key={idx}>
              <td className="text-[15px] pl-7">{val.priority}</td>
              <td className="text-[15px]">{val.time}</td>
              <td className="text-[15px]">
                {val.description.length > 30
                  ? val.description.substring(0, 30) + " ..."
                  : val.description}
              </td>
              <td className="text-[15px]">{val.progress}%</td>
              <td>
                <ButtonArray
                  deleteData={() => deleteData(val._id)}
                  readData={() => readData(val._id)}
                  editData={() => editData(val._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
