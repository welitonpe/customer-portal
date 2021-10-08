import { ClayInput } from '@clayui/form';
import ClayIcon from '@clayui/icon';

const Search = () => {

  return (
    <div className="search position-relative mb-4">
      <ClayInput className="bg-white" placeholder="Find a project" type="text"/>
      <ClayIcon className="position-absolute" symbol="search" />
    </div>
  )
}

export default Search;

