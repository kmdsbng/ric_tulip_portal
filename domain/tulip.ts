
export class Tulip {
  readonly key: string;
  readonly name: string;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }
}

export const TULIPS: Tulip[] = [
  new Tulip('barcelona', 'バルセロナ'),
  new Tulip('fox_trot', 'フォックストロット'),
  new Tulip('negurije', 'ネグリジェ'),
  new Tulip('charming_beauty', 'チャーミングビューティー'),
  new Tulip('symphony', 'シンフォニー'),
  new Tulip('ballerina', 'バレリーナ'),
  new Tulip('match', 'マッチ'),
  new Tulip('g_prince', 'ゴールデンプリンスクラウス'),
  new Tulip('momotaro', '桃太郎'),
  new Tulip('prince', 'プリンスクラウス'),
  new Tulip('dynasty', 'ダイナスティ'),
  new Tulip('negrita', 'ネグリタ'),
  new Tulip('gaburiera', 'ガブリエラ'),
  new Tulip('clear_water', 'クリアウォーター'),
  new Tulip('strong_gold', 'ストロングゴールド'),
  new Tulip('sinaeda', 'シナエダアモール'),
  new Tulip('sara', 'サラ'),
  new Tulip('green', 'グリーンスピリット'),
  new Tulip('kuminz', 'クミンズ'),
  new Tulip('mistless', 'ミストレス'),
  new Tulip('sandol', 'サンドール'),
  new Tulip('sanne', 'サンネ'),
  new Tulip('continental', 'コンチネンタル'),
  new Tulip('yohan', 'ヨハンクライフ'),
  new Tulip('mariage', 'マリアージュ'),
  new Tulip('izumi', 'イズミ'),
  new Tulip('house', 'ハウステンボス'),
  new Tulip('acepink', 'エースピンク'),
  new Tulip('redproud', 'レッドプラウド'),
  new Tulip('royal', 'ロイヤルテン'),
  new Tulip('oreruan', 'オレルアンズ'),
  new Tulip('fostery', 'フォステリーキング'),
  new Tulip('redimpression', 'レッドインプレッション'),
  new Tulip('world', 'ワールドピース'),
  new Tulip('raribera', 'ラリベラ'),
  new Tulip('aquarel', 'アクアレル'),
  new Tulip('happy_upstar', 'ハッピーアップスター'),
  new Tulip('menfis', 'メンフィス')
] as const;

const TULIP_MAP = new Map(TULIPS.map((tulip) => [tulip.key, tulip]));


export function getTulipName(key: string): string {
    const tulip = TULIP_MAP.get(key);
    return tulip ? tulip.name : key;
}
