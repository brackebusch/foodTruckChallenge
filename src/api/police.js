// import soda from 'soda-js';

// const consumer = new soda.Consumer('data.sf.gov');

export const fetchPoliceData = async () => {
  const data = await fetch('https://data.sfgov.org/resource/wg3w-h783.json');
  return data
  // consumer.query()
  // .withDataset('wg3w-h783')
  // .limit(5)
  // .where({ namelast: 'SMITH' })
  // .order('namelast')
  // .getRows()
  //   .on('success', function(rows) { console.log(rows); })
  //   .on('error', function(error) { console.error(error); });
}

