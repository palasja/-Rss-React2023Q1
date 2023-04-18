import { rest } from 'msw';
import API from '../helper/contsAPI';
import {
  CHARACTER_BY_ID_RESPONSE,
  SEARCH_AR_VALUES_RESPONSE,
  TEST_CAHRACTER_ID,
} from './mockItems';
export const handlers = [
  rest.get(`${API.host}/character`, (req, res, ctx) => {
    req.url.searchParams.set('name', '/^ar/i');
    return res(ctx.status(200), ctx.json(SEARCH_AR_VALUES_RESPONSE));
  }),
  rest.get(`${API.host}/character`, (req, res, ctx) => {
    req.url.searchParams.set('_id', TEST_CAHRACTER_ID);
    return res(ctx.status(200), ctx.json(CHARACTER_BY_ID_RESPONSE));
  }),
  rest.get(`${API.host}/character`, (req, res, ctx) => {
    req.url.searchParams.set('name', '/^/i');
    return res(ctx.status(200), ctx.json([]));
  }),
  rest.get(`${API.host}/character/${TEST_CAHRACTER_ID}/quote`, (req, res, ctx) => {
    req.url.searchParams.set('_id', TEST_CAHRACTER_ID);
    return res(
      ctx.status(200),
      ctx.json({
        docs: [],
        limit: 0,
        offset: 0,
        page: 0,
        pages: 0,
        total: 0,
      })
    );
  }),
];
