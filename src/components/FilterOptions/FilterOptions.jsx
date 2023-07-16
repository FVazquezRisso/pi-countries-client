import SelectActivity from "./SelectActivity/SelectActivity";
import SelectAlphabet from "./SelectAlphabet/SelectAlphabet";
import SelectContinent from "./SelectContinent/SelectContinent";
import SelectPopulation from './SelectPopulation/SelectPopulation';
import { FiltersContainer } from "./Styles";

export default function FilterOptions() {
  return (
    <FiltersContainer>
      <SelectContinent />
      <SelectActivity />
      <SelectAlphabet />
      <SelectPopulation />
    </FiltersContainer>
  );
}

