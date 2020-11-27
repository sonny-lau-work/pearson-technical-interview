import {getTaskOneColumns, getTaskOneRows, getTaskThreeColumns, getTaskThreeRows} from "./datastore";
import Table from "./Table";
import React from "react";

function TaskThree() {
	const columns = getTaskThreeColumns()
		, rows = getTaskThreeRows()
	;

	return (
		<Table columns={columns} rows={rows}/>
	);
}

export default TaskThree;