import { useTable, useSortBy, usePagination } from "react-table";
import { FC, useEffect, useRef } from "react";
import classNames from "classnames";
import Image from "next/image";
import ArrowDown from "../../../public/assets/icons/ArrowDown.png";
import Previous from "../../../public/assets/icons/Previous.png";
import Next from "../../../public/assets/icons/Next.png";

interface TableProps {
	tableTitle: string;
	data: any[];
	columns: any[];
}

export const Table: FC<TableProps> = ({ tableTitle, data, columns }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const tableInstance = useTable(
		{
			data,
			columns,
			initialState: { pageIndex: 0 },
		},
		useSortBy,
		usePagination
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		canPreviousPage,
		canNextPage,
		nextPage,
		previousPage,
		pageOptions,
		gotoPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = tableInstance;

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = String(pageIndex + 1);
		}
	}, [pageIndex]);

	return (
		<div className="px-10">
			<p className="pb-12 pt-8">{tableTitle}</p>
			<table {...getTableProps()} className="min-w-full">
				<thead className="border-b-2 border-gray-50/[1]">
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									className={classNames(
										"px-9 py-6 text-xs font-normal text-left",
										{ hidden: column.placeholderOf },
										{ "cursor-pointer": column.canSort }
									)}
								>
									<div className="flex gap-1 items-center">
										{column.render("Header")}
										{column.isSorted ? (
											column.isSortedDesc ? (
												<Image src={ArrowDown} alt="arrow down" />
											) : (
												<Image
													src={ArrowDown}
													alt="arrow up"
													className="rotate-180 m-0 p-0"
												/>
											)
										) : (
											""
										)}
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()} className="bg-gr">
					{page.map((row) => {
						prepareRow(row);
						const rowClassName = row.index % 2 === 0 ? "" : "bg-gray-modern";
						return (
							<tr {...row.getRowProps()} className={rowClassName}>
								{row.cells.map((cell) => (
									<td
										{...cell.getCellProps()}
										className="px-9 py-6 whitespace-nowrap text-sm"
									>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="pagination pt-12 flex flex-wrap justify-center">
				<button
					className="p-6"
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					<Image src={Previous} alt="previous table page" />
				</button>{" "}
				<span className="pl-8 pr-8 flex items-center">
					Page{" "}
					<input
						className="inline-block w-10 text-center focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color appearance-none m-0"
						type="number"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const goPage = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(goPage);
						}}
						ref={inputRef}
					/>{" "}
					<span className="pr-6">of</span> <b>{pageOptions.length}</b>
				</span>
				<button
					className="p-6"
					onClick={() => nextPage()}
					disabled={!canNextPage}
				>
					<Image src={Next} alt="next table page" />
				</button>{" "}
				<select
					className="appearance-none inline-block focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-primary-color"
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[10, 25, 50, 100].map((showPageSize) => (
						<option key={showPageSize} value={showPageSize}>
							Show {showPageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Table;
