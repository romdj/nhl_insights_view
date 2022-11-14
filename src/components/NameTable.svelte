<script>
  import SvelteTable from "svelte-table";
  import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";
  faker.seed(5);

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";
  let selectedCols = ["id", "first_name", "last_name", "email"];
  let numRows = 10;
  let data = [];

  let generateData = () => {
    data = Array(numRows)
      .fill("")
      .map((n, i) => {
        let d = {
          id: i,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName()
        };
        d.email =
          d.first_name[0].toLowerCase() +
          d.last_name.toLowerCase() +
          "@zipit.org.ca";
        return d;
      });
  };

  const COLUMNS = {
    id: {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
    },
    first_name: {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
      filterOptions: rows => {
        let letrs = {};
        rows.forEach(row => {
          let letr = row.first_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase()
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.first_name.charAt(0).toLowerCase()
    },
    last_name: {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
      filterOptions: rows => {
        let letrs = {};
        rows.forEach(row => {
          let letr = row.last_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase()
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.last_name.charAt(0).toLowerCase()
    },
    email: {
      key: "email",
      title: "EMAIL",
      value: v => v.email,
      sortable: true,
      class: "text-center"
    }
  };
	console.log(COLUMNS);

  $: cols = selectedCols.map(key => COLUMNS[key]);
	generateData()
</script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
<div class="container">
  <h1>SvelteTable Example 4</h1>
  <div class="row">
    <SvelteTable
      columns={cols}
      rows={data}
      bind:sortBy
      bind:sortOrder
      classNameTable={['table table-striped']}
      classNameThead={['table-primary']}
      classNameSelect={['custom-select']} />
  </div>
</div>