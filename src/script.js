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
