import 'server-only';

import Typography from '@mui/material/Typography';

async function TitleName() {
  const name = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  //delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const nameJson = await name.json();

  const displayName = (nameJson as any).name;
  return (
    <div>
      <Typography variant="body1" fontWeight={ 500 }>
        { displayName }
      </Typography>
    </div>
  );
}

export default TitleName;
