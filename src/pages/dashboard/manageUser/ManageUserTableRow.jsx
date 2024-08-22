const ManageUserTableRow = ({ user, handleDeleteUser }) => {
  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{user.name}</td>
      <td className="p-3 px-5">{user.email}</td>
      <td className="p-3 px-5">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="p-3 px-5">{user.role}</td>
      <td className="p-3 px-5">
        <select
          value="user.role"
          className="bg-transparent border-b-2 border-gray-300 py-2"
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="seller">seller</option>
        </select>
      </td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button
        onClick={() => handleDeleteUser(user._id)}
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserTableRow;
