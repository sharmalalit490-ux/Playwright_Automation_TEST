import * as fs from 'fs';

export function readCSV(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8');

  const rows = data.trim().split(/\r?\n/);
  const headers = rows[0].split(',');

  return rows.slice(1).map(row => {
    const values = row.split(',');

    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {} as any);
  });
}