import { expect, it } from 'vitest';
import { sveltifyColumn } from '../src/functions/utils';
import keys from './data/rankingKeys.json';


it('returns expected value', () => {
    const expectedResult = [{
        key: "rank",
        title: "RANK",
        value: expect.anything(),
        sortable: false,
    }];
    expect(sveltifyColumn([keys[0]])).toEqual(expectedResult);
});

it('returns expected value - simplified 1 team ranking', () => {
    const expectedResult = [{
        key: "rank",
        title: "RANK",
        value: expect.anything(),
        sortable: false,
    },
    {
        key: "teamName",
        title: "TEAMNAME",
        value: expect.anything(),
        sortable: false,
    }];
    expect(sveltifyColumn([keys[0], keys[1]])).toEqual(expectedResult);
});

it('returns expected value - whole ranking', () => {
    const expectedResult = [
        {
          key: 'rank',
          sortable: false,
          title: 'RANK',
          value: expect.anything(),
        },
        {
          key: 'teamName',
          sortable: false,
          title: 'TEAMNAME',
          value: expect.anything(),
        },
        {
          key: 'GP',
          sortable: false,
          title: 'GP',
          value: expect.anything(),
        },
        {
          key: 'OfficialW',
          sortable: false,
          title: 'OFFICIALW',
          value: expect.anything(),
        },
        {
          key: 'RL',
          sortable: false,
          title: 'RL',
          value: expect.anything(),
        },
        {
          key: 'OTL',
          sortable: false,
          title: 'OTL',
          value: expect.anything(),
        },
        {
          key: 'PTS',
          sortable: false,
          title: 'PTS',
          value: expect.anything(),
        },
        {
          key: 'P%',
          sortable: false,
          title: 'P%',
          value: expect.anything(),
        },
        {
          key: 'RW',
          sortable: false,
          title: 'RW',
          value: expect.anything(),
        },
        {
          key: 'ROW',
          sortable: false,
          title: 'ROW',
          value: expect.anything(),
        },
        {
          key: 'GF',
          sortable: false,
          title: 'GF',
          value: expect.anything(),
        },
        {
          key: 'GoalsAgainst',
          sortable: false,
          title: 'GOALSAGAINST',
          value: expect.anything(),
        },
        {
          key: 'Diff',
          sortable: false,
          title: 'DIFF',
          value: expect.anything(),
        },
        {
          key: 'HOME',
          sortable: false,
          title: 'HOME',
          value: expect.anything(),
        },
        {
          key: 'AWAY',
          sortable: false,
          title: 'AWAY',
          value: expect.anything(),
        },
        {
          key: 'S/O',
          sortable: false,
          title: 'S/O',
          value: expect.anything(),
        },
        {
          key: 'Last10',
          sortable: false,
          title: 'LAST10',
          value: expect.anything(),
        },
        {
          key: 'Streak',
          sortable: false,
          title: 'STREAK',
          value: expect.anything(),
        }
      ];
    expect(sveltifyColumn(keys)).toEqual(expectedResult);
});
