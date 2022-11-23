
type Sheldon = 'bazinga' | 'yummy' | 'moonpie'

type SdexYY = Extract<Sheldon, 'yummy'>

// 实现
// 依旧是条件分发
type myExtract<T, K> = T extends K ? T : never

type Sdexm = myExtract<Sheldon, 'moonpie' | 'yummy'>

export { }