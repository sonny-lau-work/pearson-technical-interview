function Table({columns, rows}) {
	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => {
						return (
							<th>{column.label}</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => {
					return (
						<tr>
							{columns.map((column) => {
								return (
									<td>{row[column.name]}</td>
								);
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	);
}

export default Table;