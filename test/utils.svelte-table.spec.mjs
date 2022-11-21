import { it, expect, test, beforeAll } from 'vitest'
import { sveltify } from '../src/functions/utils';
import ranking from './data/ranking.json';

let simplifiedRanking1 = ranking;
let simplifiedRanking2 = ranking;

beforeAll(() => {
    simplifiedRanking1 = simplifiedRanking1.map(simplifiedTeam => ({
        teamName: simplifiedTeam.teamName
    }));
    simplifiedRanking2 = simplifiedRanking2.map(simplifiedTeam => ({
        rank: simplifiedTeam.rank,
        teamName: simplifiedTeam.teamName
    }));
});

it.skip('displays basic value', () => {
    const expectedResult = [{
        teamName: {
            key: "teamName",
            title: "ANAHEIM",
            value: expect.anything(),
            sortable: false,
        },
    }];
    expect(sveltify([simplifiedRanking1.pop()])).toEqual(expectedResult);
});

it.skip('displays basic value - simplified 1 team ranking', () => {
    const expectedResult = [{
        teamName: {
            key: "teamName",
            title: "ANAHEIM",
            value: expect.anything(),
            sortable: false,
        },
        rank: {
            key: "rank",
            title: 32,
            value: expect.anything(),
            sortable: true,
        },
    }];
    expect(sveltify([simplifiedRanking2.pop()])).toEqual(expectedResult);
});

it.skip('displays value - whole ranking', () => {
    expect(sveltify(ranking)).toContainEqual({
        rank: {
            key: 'rank',
            sortable: true,
            title: 32,
            value: expect.anything(),
        },
        teamName: {
            key: 'teamName',
            sortable: false,
            title: 'ANAHEIM',
            value: expect.anything(),
        },
        GP: { key: 'GP', sortable: true, title: 15, value: expect.anything(), },
        OfficialW: {
            key: 'OfficialW',
            sortable: true,
            title: 4,
            value: expect.anything(),
        },
        RL: { key: 'RL', sortable: true, title: 10, value: expect.anything(), },
        OTL: { key: 'OTL', sortable: true, title: 1, value: expect.anything(), },
        PTS: { key: 'PTS', sortable: true, title: 9, value: expect.anything(), },
        'P%': {
            key: 'P%',
            sortable: false,
            title: '.300',
            value: expect.anything(),
        },
        RW: { key: 'RW', sortable: true, title: 0, value: expect.anything(), },
        ROW: { key: 'ROW', sortable: true, title: 2, value: expect.anything(), },
        GF: { key: 'GF', sortable: true, title: 42, value: expect.anything(), },
        GoalsAgainst: {
            key: 'GoalsAgainst',
            sortable: true,
            title: 68,
            value: expect.anything(),
        },
        Diff: {
            key: 'Diff',
            sortable: false,
            title: '-26',
            value: expect.anything(),
        },
        HOME: {
            key: 'HOME',
            sortable: false,
            title: '2-4-0',
            value: expect.anything(),
        },
        AWAY: {
            key: 'AWAY',
            sortable: false,
            title: '2-6-1',
            value: expect.anything(),
        },
        'S/O': {
            key: 'S/O',
            sortable: false,
            title: '2-1',
            value: expect.anything(),
        },
        Last10: {
            key: 'Last10',
            sortable: false,
            title: '3-7-0',
            value: expect.anything(),
        },
        Streak: {
            key: 'Streak',
            sortable: false,
            title: 'L3',
            value: expect.anything(),
        }
    });
});
