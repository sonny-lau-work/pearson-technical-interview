import {getTaskTwoColumns, getTaskTwoRows} from "./datastore";
import Table from "./Table";
import React from "react";

function TaskTwo() {
	const columns = getTaskTwoColumns()
		, rows = getTaskTwoRows()
	;

	return (
		<Table columns={columns} rows={rows}/>
	);
}

export default TaskTwo;