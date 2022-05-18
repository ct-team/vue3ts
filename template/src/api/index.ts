import Vue from 'vue';
import Interface from '@/api/interface';

export const takeEffect = async () => {
  //@ts-ignore
  return Vue.$dart.http.ajax({
    method: 'get',
    url: Interface.takeEffect
  });
};

export const getPermission = async (pageId: any) => {
  //@ts-ignore
  return Vue.$dart.http.ajax({
    method: 'get',
    url: Interface.getPermission,
    data: { PageId: pageId }
  });
};
