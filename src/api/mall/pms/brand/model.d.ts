declare namespace API {
  /** 在线商品列表 */
  type BaseEntityItem = {
    id: number;
    name: string;
    firstLetter: string;
    sort: number;
    factoryStatus: number;
    showStatus: number;
    productCount: number;
    productCommentCount: number;
    logo: string;
    bigPic: string;
    brandStory: string;
  };

  /** 在在线商品列表 */
  type BaseEntityItemResult = BaseEntityItem[];
}
