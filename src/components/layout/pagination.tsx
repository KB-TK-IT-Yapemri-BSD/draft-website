const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
	const handlePageChange = (page: any) => {
		onPageChange(page);
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => handlePageChange(i)}
					className={`${
						currentPage === i
							? 'bg-blue-500 text-white'
							: 'bg-gray-200'
					} border border-gray-300 px-4 py-2 mx-1 rounded-lg`}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	return <div className="text-center pt-6">{renderPageNumbers()}</div>;
};

export default Pagination;
