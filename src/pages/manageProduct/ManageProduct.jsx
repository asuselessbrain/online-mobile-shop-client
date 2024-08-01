

const ManageProduct = () => {
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-t-2xl overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className="bg-[#D1A054]">
                  <tr>
                  <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      Product Image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      Product Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-6  border-b border-gray-200 text-white text-left font-semibold uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>{/* Table Row Data */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageProduct;