import Portal from '@arcgis/core/portal/Portal';
import OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

const info = new OAuthInfo({
    appId: 'u19OqZGj92i2JNV2',
    popup: false
  });
  IdentityManager.registerOAuthInfos([info]);

export const authenticate = (): Promise<boolean> => {
    return promiseUtils.create((resolve, reject) => {
        const portal = new Portal();
        portal.load().then(() => {

          resolve(true);
        }).catch(reason => {
            reject(reason);
        });
    });

}