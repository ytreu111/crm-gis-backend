
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DirectoryField
 * 
 */
export type DirectoryField = $Result.DefaultSelection<Prisma.$DirectoryFieldPayload>
/**
 * Model Directory
 * 
 */
export type Directory = $Result.DefaultSelection<Prisma.$DirectoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DirectoryFieldType: {
  integer: 'integer',
  float: 'float',
  string: 'string',
  date: 'date',
  datetime: 'datetime',
  time: 'time'
};

export type DirectoryFieldType = (typeof DirectoryFieldType)[keyof typeof DirectoryFieldType]

}

export type DirectoryFieldType = $Enums.DirectoryFieldType

export const DirectoryFieldType: typeof $Enums.DirectoryFieldType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DirectoryFields
 * const directoryFields = await prisma.directoryField.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DirectoryFields
   * const directoryFields = await prisma.directoryField.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.directoryField`: Exposes CRUD operations for the **DirectoryField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectoryFields
    * const directoryFields = await prisma.directoryField.findMany()
    * ```
    */
  get directoryField(): Prisma.DirectoryFieldDelegate<ExtArgs>;

  /**
   * `prisma.directory`: Exposes CRUD operations for the **Directory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directories
    * const directories = await prisma.directory.findMany()
    * ```
    */
  get directory(): Prisma.DirectoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DirectoryField: 'DirectoryField',
    Directory: 'Directory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "directoryField" | "directory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DirectoryField: {
        payload: Prisma.$DirectoryFieldPayload<ExtArgs>
        fields: Prisma.DirectoryFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          findMany: {
            args: Prisma.DirectoryFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>[]
          }
          create: {
            args: Prisma.DirectoryFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          createMany: {
            args: Prisma.DirectoryFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>[]
          }
          delete: {
            args: Prisma.DirectoryFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          update: {
            args: Prisma.DirectoryFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DirectoryFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryFieldPayload>
          }
          aggregate: {
            args: Prisma.DirectoryFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectoryField>
          }
          groupBy: {
            args: Prisma.DirectoryFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryFieldCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryFieldCountAggregateOutputType> | number
          }
        }
      }
      Directory: {
        payload: Prisma.$DirectoryPayload<ExtArgs>
        fields: Prisma.DirectoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findMany: {
            args: Prisma.DirectoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          create: {
            args: Prisma.DirectoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          createMany: {
            args: Prisma.DirectoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          delete: {
            args: Prisma.DirectoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          update: {
            args: Prisma.DirectoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DirectoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          aggregate: {
            args: Prisma.DirectoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectory>
          }
          groupBy: {
            args: Prisma.DirectoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DirectoryCountOutputType
   */

  export type DirectoryCountOutputType = {
    fields: number
  }

  export type DirectoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | DirectoryCountOutputTypeCountFieldsArgs
  }

  // Custom InputTypes
  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryCountOutputType
     */
    select?: DirectoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectoryCountOutputType without action
   */
  export type DirectoryCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryFieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DirectoryField
   */

  export type AggregateDirectoryField = {
    _count: DirectoryFieldCountAggregateOutputType | null
    _avg: DirectoryFieldAvgAggregateOutputType | null
    _sum: DirectoryFieldSumAggregateOutputType | null
    _min: DirectoryFieldMinAggregateOutputType | null
    _max: DirectoryFieldMaxAggregateOutputType | null
  }

  export type DirectoryFieldAvgAggregateOutputType = {
    order: number | null
  }

  export type DirectoryFieldSumAggregateOutputType = {
    order: number | null
  }

  export type DirectoryFieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DirectoryFieldType | null
    required: boolean | null
    multiple: boolean | null
    order: number | null
    show_in_list: boolean | null
    directory_id: string | null
  }

  export type DirectoryFieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DirectoryFieldType | null
    required: boolean | null
    multiple: boolean | null
    order: number | null
    show_in_list: boolean | null
    directory_id: string | null
  }

  export type DirectoryFieldCountAggregateOutputType = {
    id: number
    name: number
    type: number
    required: number
    multiple: number
    order: number
    show_in_list: number
    directory_id: number
    _all: number
  }


  export type DirectoryFieldAvgAggregateInputType = {
    order?: true
  }

  export type DirectoryFieldSumAggregateInputType = {
    order?: true
  }

  export type DirectoryFieldMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    multiple?: true
    order?: true
    show_in_list?: true
    directory_id?: true
  }

  export type DirectoryFieldMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    multiple?: true
    order?: true
    show_in_list?: true
    directory_id?: true
  }

  export type DirectoryFieldCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    multiple?: true
    order?: true
    show_in_list?: true
    directory_id?: true
    _all?: true
  }

  export type DirectoryFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryField to aggregate.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectoryFields
    **/
    _count?: true | DirectoryFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectoryFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectoryFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryFieldMaxAggregateInputType
  }

  export type GetDirectoryFieldAggregateType<T extends DirectoryFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectoryField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectoryField[P]>
      : GetScalarType<T[P], AggregateDirectoryField[P]>
  }




  export type DirectoryFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryFieldWhereInput
    orderBy?: DirectoryFieldOrderByWithAggregationInput | DirectoryFieldOrderByWithAggregationInput[]
    by: DirectoryFieldScalarFieldEnum[] | DirectoryFieldScalarFieldEnum
    having?: DirectoryFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryFieldCountAggregateInputType | true
    _avg?: DirectoryFieldAvgAggregateInputType
    _sum?: DirectoryFieldSumAggregateInputType
    _min?: DirectoryFieldMinAggregateInputType
    _max?: DirectoryFieldMaxAggregateInputType
  }

  export type DirectoryFieldGroupByOutputType = {
    id: string
    name: string
    type: $Enums.DirectoryFieldType
    required: boolean
    multiple: boolean
    order: number
    show_in_list: boolean
    directory_id: string
    _count: DirectoryFieldCountAggregateOutputType | null
    _avg: DirectoryFieldAvgAggregateOutputType | null
    _sum: DirectoryFieldSumAggregateOutputType | null
    _min: DirectoryFieldMinAggregateOutputType | null
    _max: DirectoryFieldMaxAggregateOutputType | null
  }

  type GetDirectoryFieldGroupByPayload<T extends DirectoryFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryFieldGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryFieldGroupByOutputType[P]>
        }
      >
    >


  export type DirectoryFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    multiple?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryField"]>

  export type DirectoryFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    multiple?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directoryField"]>

  export type DirectoryFieldSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    multiple?: boolean
    order?: boolean
    show_in_list?: boolean
    directory_id?: boolean
  }

  export type DirectoryFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }
  export type DirectoryFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory?: boolean | DirectoryDefaultArgs<ExtArgs>
  }

  export type $DirectoryFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectoryField"
    objects: {
      directory: Prisma.$DirectoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.DirectoryFieldType
      required: boolean
      multiple: boolean
      order: number
      show_in_list: boolean
      directory_id: string
    }, ExtArgs["result"]["directoryField"]>
    composites: {}
  }

  type DirectoryFieldGetPayload<S extends boolean | null | undefined | DirectoryFieldDefaultArgs> = $Result.GetResult<Prisma.$DirectoryFieldPayload, S>

  type DirectoryFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DirectoryFieldFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DirectoryFieldCountAggregateInputType | true
    }

  export interface DirectoryFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectoryField'], meta: { name: 'DirectoryField' } }
    /**
     * Find zero or one DirectoryField that matches the filter.
     * @param {DirectoryFieldFindUniqueArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFieldFindUniqueArgs>(args: SelectSubset<T, DirectoryFieldFindUniqueArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DirectoryField that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DirectoryFieldFindUniqueOrThrowArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DirectoryField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindFirstArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFieldFindFirstArgs>(args?: SelectSubset<T, DirectoryFieldFindFirstArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DirectoryField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindFirstOrThrowArgs} args - Arguments to find a DirectoryField
     * @example
     * // Get one DirectoryField
     * const directoryField = await prisma.directoryField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DirectoryFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectoryFields
     * const directoryFields = await prisma.directoryField.findMany()
     * 
     * // Get first 10 DirectoryFields
     * const directoryFields = await prisma.directoryField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryFieldWithIdOnly = await prisma.directoryField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFieldFindManyArgs>(args?: SelectSubset<T, DirectoryFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DirectoryField.
     * @param {DirectoryFieldCreateArgs} args - Arguments to create a DirectoryField.
     * @example
     * // Create one DirectoryField
     * const DirectoryField = await prisma.directoryField.create({
     *   data: {
     *     // ... data to create a DirectoryField
     *   }
     * })
     * 
     */
    create<T extends DirectoryFieldCreateArgs>(args: SelectSubset<T, DirectoryFieldCreateArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DirectoryFields.
     * @param {DirectoryFieldCreateManyArgs} args - Arguments to create many DirectoryFields.
     * @example
     * // Create many DirectoryFields
     * const directoryField = await prisma.directoryField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryFieldCreateManyArgs>(args?: SelectSubset<T, DirectoryFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectoryFields and returns the data saved in the database.
     * @param {DirectoryFieldCreateManyAndReturnArgs} args - Arguments to create many DirectoryFields.
     * @example
     * // Create many DirectoryFields
     * const directoryField = await prisma.directoryField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectoryFields and only return the `id`
     * const directoryFieldWithIdOnly = await prisma.directoryField.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DirectoryField.
     * @param {DirectoryFieldDeleteArgs} args - Arguments to delete one DirectoryField.
     * @example
     * // Delete one DirectoryField
     * const DirectoryField = await prisma.directoryField.delete({
     *   where: {
     *     // ... filter to delete one DirectoryField
     *   }
     * })
     * 
     */
    delete<T extends DirectoryFieldDeleteArgs>(args: SelectSubset<T, DirectoryFieldDeleteArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DirectoryField.
     * @param {DirectoryFieldUpdateArgs} args - Arguments to update one DirectoryField.
     * @example
     * // Update one DirectoryField
     * const directoryField = await prisma.directoryField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryFieldUpdateArgs>(args: SelectSubset<T, DirectoryFieldUpdateArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DirectoryFields.
     * @param {DirectoryFieldDeleteManyArgs} args - Arguments to filter DirectoryFields to delete.
     * @example
     * // Delete a few DirectoryFields
     * const { count } = await prisma.directoryField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryFieldDeleteManyArgs>(args?: SelectSubset<T, DirectoryFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectoryFields
     * const directoryField = await prisma.directoryField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryFieldUpdateManyArgs>(args: SelectSubset<T, DirectoryFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectoryField.
     * @param {DirectoryFieldUpsertArgs} args - Arguments to update or create a DirectoryField.
     * @example
     * // Update or create a DirectoryField
     * const directoryField = await prisma.directoryField.upsert({
     *   create: {
     *     // ... data to create a DirectoryField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectoryField we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryFieldUpsertArgs>(args: SelectSubset<T, DirectoryFieldUpsertArgs<ExtArgs>>): Prisma__DirectoryFieldClient<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DirectoryFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldCountArgs} args - Arguments to filter DirectoryFields to count.
     * @example
     * // Count the number of DirectoryFields
     * const count = await prisma.directoryField.count({
     *   where: {
     *     // ... the filter for the DirectoryFields we want to count
     *   }
     * })
    **/
    count<T extends DirectoryFieldCountArgs>(
      args?: Subset<T, DirectoryFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectoryField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryFieldAggregateArgs>(args: Subset<T, DirectoryFieldAggregateArgs>): Prisma.PrismaPromise<GetDirectoryFieldAggregateType<T>>

    /**
     * Group by DirectoryField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryFieldGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectoryField model
   */
  readonly fields: DirectoryFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectoryField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directory<T extends DirectoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryDefaultArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectoryField model
   */ 
  interface DirectoryFieldFieldRefs {
    readonly id: FieldRef<"DirectoryField", 'String'>
    readonly name: FieldRef<"DirectoryField", 'String'>
    readonly type: FieldRef<"DirectoryField", 'DirectoryFieldType'>
    readonly required: FieldRef<"DirectoryField", 'Boolean'>
    readonly multiple: FieldRef<"DirectoryField", 'Boolean'>
    readonly order: FieldRef<"DirectoryField", 'Int'>
    readonly show_in_list: FieldRef<"DirectoryField", 'Boolean'>
    readonly directory_id: FieldRef<"DirectoryField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DirectoryField findUnique
   */
  export type DirectoryFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField findUniqueOrThrow
   */
  export type DirectoryFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField findFirst
   */
  export type DirectoryFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFields.
     */
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField findFirstOrThrow
   */
  export type DirectoryFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryField to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryFields.
     */
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField findMany
   */
  export type DirectoryFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryFields to fetch.
     */
    where?: DirectoryFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryFields to fetch.
     */
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectoryFields.
     */
    cursor?: DirectoryFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryFields.
     */
    skip?: number
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * DirectoryField create
   */
  export type DirectoryFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectoryField.
     */
    data: XOR<DirectoryFieldCreateInput, DirectoryFieldUncheckedCreateInput>
  }

  /**
   * DirectoryField createMany
   */
  export type DirectoryFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectoryFields.
     */
    data: DirectoryFieldCreateManyInput | DirectoryFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectoryField createManyAndReturn
   */
  export type DirectoryFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DirectoryFields.
     */
    data: DirectoryFieldCreateManyInput | DirectoryFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryField update
   */
  export type DirectoryFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectoryField.
     */
    data: XOR<DirectoryFieldUpdateInput, DirectoryFieldUncheckedUpdateInput>
    /**
     * Choose, which DirectoryField to update.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField updateMany
   */
  export type DirectoryFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectoryFields.
     */
    data: XOR<DirectoryFieldUpdateManyMutationInput, DirectoryFieldUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryFields to update
     */
    where?: DirectoryFieldWhereInput
  }

  /**
   * DirectoryField upsert
   */
  export type DirectoryFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectoryField to update in case it exists.
     */
    where: DirectoryFieldWhereUniqueInput
    /**
     * In case the DirectoryField found by the `where` argument doesn't exist, create a new DirectoryField with this data.
     */
    create: XOR<DirectoryFieldCreateInput, DirectoryFieldUncheckedCreateInput>
    /**
     * In case the DirectoryField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryFieldUpdateInput, DirectoryFieldUncheckedUpdateInput>
  }

  /**
   * DirectoryField delete
   */
  export type DirectoryFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    /**
     * Filter which DirectoryField to delete.
     */
    where: DirectoryFieldWhereUniqueInput
  }

  /**
   * DirectoryField deleteMany
   */
  export type DirectoryFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryFields to delete
     */
    where?: DirectoryFieldWhereInput
  }

  /**
   * DirectoryField without action
   */
  export type DirectoryFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
  }


  /**
   * Model Directory
   */

  export type AggregateDirectory = {
    _count: DirectoryCountAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  export type DirectoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type DirectoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type DirectoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type DirectoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DirectoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DirectoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type DirectoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directory to aggregate.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directories
    **/
    _count?: true | DirectoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryMaxAggregateInputType
  }

  export type GetDirectoryAggregateType<T extends DirectoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectory[P]>
      : GetScalarType<T[P], AggregateDirectory[P]>
  }




  export type DirectoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryWhereInput
    orderBy?: DirectoryOrderByWithAggregationInput | DirectoryOrderByWithAggregationInput[]
    by: DirectoryScalarFieldEnum[] | DirectoryScalarFieldEnum
    having?: DirectoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryCountAggregateInputType | true
    _min?: DirectoryMinAggregateInputType
    _max?: DirectoryMaxAggregateInputType
  }

  export type DirectoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: DirectoryCountAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  type GetDirectoryGroupByPayload<T extends DirectoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
        }
      >
    >


  export type DirectorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fields?: boolean | Directory$fieldsArgs<ExtArgs>
    _count?: boolean | DirectoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directory"]>

  export type DirectorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["directory"]>

  export type DirectorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type DirectoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | Directory$fieldsArgs<ExtArgs>
    _count?: boolean | DirectoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Directory"
    objects: {
      fields: Prisma.$DirectoryFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["directory"]>
    composites: {}
  }

  type DirectoryGetPayload<S extends boolean | null | undefined | DirectoryDefaultArgs> = $Result.GetResult<Prisma.$DirectoryPayload, S>

  type DirectoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DirectoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DirectoryCountAggregateInputType | true
    }

  export interface DirectoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Directory'], meta: { name: 'Directory' } }
    /**
     * Find zero or one Directory that matches the filter.
     * @param {DirectoryFindUniqueArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFindUniqueArgs>(args: SelectSubset<T, DirectoryFindUniqueArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Directory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DirectoryFindUniqueOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Directory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFindFirstArgs>(args?: SelectSubset<T, DirectoryFindFirstArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Directory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directories
     * const directories = await prisma.directory.findMany()
     * 
     * // Get first 10 Directories
     * const directories = await prisma.directory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryWithIdOnly = await prisma.directory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFindManyArgs>(args?: SelectSubset<T, DirectoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Directory.
     * @param {DirectoryCreateArgs} args - Arguments to create a Directory.
     * @example
     * // Create one Directory
     * const Directory = await prisma.directory.create({
     *   data: {
     *     // ... data to create a Directory
     *   }
     * })
     * 
     */
    create<T extends DirectoryCreateArgs>(args: SelectSubset<T, DirectoryCreateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Directories.
     * @param {DirectoryCreateManyArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directory = await prisma.directory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryCreateManyArgs>(args?: SelectSubset<T, DirectoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directories and returns the data saved in the database.
     * @param {DirectoryCreateManyAndReturnArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directory = await prisma.directory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directories and only return the `id`
     * const directoryWithIdOnly = await prisma.directory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Directory.
     * @param {DirectoryDeleteArgs} args - Arguments to delete one Directory.
     * @example
     * // Delete one Directory
     * const Directory = await prisma.directory.delete({
     *   where: {
     *     // ... filter to delete one Directory
     *   }
     * })
     * 
     */
    delete<T extends DirectoryDeleteArgs>(args: SelectSubset<T, DirectoryDeleteArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Directory.
     * @param {DirectoryUpdateArgs} args - Arguments to update one Directory.
     * @example
     * // Update one Directory
     * const directory = await prisma.directory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryUpdateArgs>(args: SelectSubset<T, DirectoryUpdateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Directories.
     * @param {DirectoryDeleteManyArgs} args - Arguments to filter Directories to delete.
     * @example
     * // Delete a few Directories
     * const { count } = await prisma.directory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryDeleteManyArgs>(args?: SelectSubset<T, DirectoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directories
     * const directory = await prisma.directory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryUpdateManyArgs>(args: SelectSubset<T, DirectoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Directory.
     * @param {DirectoryUpsertArgs} args - Arguments to update or create a Directory.
     * @example
     * // Update or create a Directory
     * const directory = await prisma.directory.upsert({
     *   create: {
     *     // ... data to create a Directory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directory we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryUpsertArgs>(args: SelectSubset<T, DirectoryUpsertArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryCountArgs} args - Arguments to filter Directories to count.
     * @example
     * // Count the number of Directories
     * const count = await prisma.directory.count({
     *   where: {
     *     // ... the filter for the Directories we want to count
     *   }
     * })
    **/
    count<T extends DirectoryCountArgs>(
      args?: Subset<T, DirectoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryAggregateArgs>(args: Subset<T, DirectoryAggregateArgs>): Prisma.PrismaPromise<GetDirectoryAggregateType<T>>

    /**
     * Group by Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Directory model
   */
  readonly fields: DirectoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Directory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends Directory$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Directory$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryFieldPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Directory model
   */ 
  interface DirectoryFieldRefs {
    readonly id: FieldRef<"Directory", 'String'>
    readonly name: FieldRef<"Directory", 'String'>
    readonly description: FieldRef<"Directory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Directory findUnique
   */
  export type DirectoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findUniqueOrThrow
   */
  export type DirectoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findFirst
   */
  export type DirectoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findFirstOrThrow
   */
  export type DirectoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findMany
   */
  export type DirectoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter, which Directories to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory create
   */
  export type DirectoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Directory.
     */
    data: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
  }

  /**
   * Directory createMany
   */
  export type DirectoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directories.
     */
    data: DirectoryCreateManyInput | DirectoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Directory createManyAndReturn
   */
  export type DirectoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Directories.
     */
    data: DirectoryCreateManyInput | DirectoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Directory update
   */
  export type DirectoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Directory.
     */
    data: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
    /**
     * Choose, which Directory to update.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory updateMany
   */
  export type DirectoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directories.
     */
    data: XOR<DirectoryUpdateManyMutationInput, DirectoryUncheckedUpdateManyInput>
    /**
     * Filter which Directories to update
     */
    where?: DirectoryWhereInput
  }

  /**
   * Directory upsert
   */
  export type DirectoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Directory to update in case it exists.
     */
    where: DirectoryWhereUniqueInput
    /**
     * In case the Directory found by the `where` argument doesn't exist, create a new Directory with this data.
     */
    create: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
    /**
     * In case the Directory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
  }

  /**
   * Directory delete
   */
  export type DirectoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
    /**
     * Filter which Directory to delete.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory deleteMany
   */
  export type DirectoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directories to delete
     */
    where?: DirectoryWhereInput
  }

  /**
   * Directory.fields
   */
  export type Directory$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryField
     */
    select?: DirectoryFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryFieldInclude<ExtArgs> | null
    where?: DirectoryFieldWhereInput
    orderBy?: DirectoryFieldOrderByWithRelationInput | DirectoryFieldOrderByWithRelationInput[]
    cursor?: DirectoryFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectoryFieldScalarFieldEnum | DirectoryFieldScalarFieldEnum[]
  }

  /**
   * Directory without action
   */
  export type DirectoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DirectoryFieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    required: 'required',
    multiple: 'multiple',
    order: 'order',
    show_in_list: 'show_in_list',
    directory_id: 'directory_id'
  };

  export type DirectoryFieldScalarFieldEnum = (typeof DirectoryFieldScalarFieldEnum)[keyof typeof DirectoryFieldScalarFieldEnum]


  export const DirectoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type DirectoryScalarFieldEnum = (typeof DirectoryScalarFieldEnum)[keyof typeof DirectoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DirectoryFieldType'
   */
  export type EnumDirectoryFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DirectoryFieldType'>
    


  /**
   * Reference to a field of type 'DirectoryFieldType[]'
   */
  export type ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DirectoryFieldType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DirectoryFieldWhereInput = {
    AND?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    OR?: DirectoryFieldWhereInput[]
    NOT?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    id?: StringFilter<"DirectoryField"> | string
    name?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    multiple?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
    directory?: XOR<DirectoryRelationFilter, DirectoryWhereInput>
  }

  export type DirectoryFieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    multiple?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
    directory?: DirectoryOrderByWithRelationInput
  }

  export type DirectoryFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    OR?: DirectoryFieldWhereInput[]
    NOT?: DirectoryFieldWhereInput | DirectoryFieldWhereInput[]
    name?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    multiple?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
    directory?: XOR<DirectoryRelationFilter, DirectoryWhereInput>
  }, "id">

  export type DirectoryFieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    multiple?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
    _count?: DirectoryFieldCountOrderByAggregateInput
    _avg?: DirectoryFieldAvgOrderByAggregateInput
    _max?: DirectoryFieldMaxOrderByAggregateInput
    _min?: DirectoryFieldMinOrderByAggregateInput
    _sum?: DirectoryFieldSumOrderByAggregateInput
  }

  export type DirectoryFieldScalarWhereWithAggregatesInput = {
    AND?: DirectoryFieldScalarWhereWithAggregatesInput | DirectoryFieldScalarWhereWithAggregatesInput[]
    OR?: DirectoryFieldScalarWhereWithAggregatesInput[]
    NOT?: DirectoryFieldScalarWhereWithAggregatesInput | DirectoryFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectoryField"> | string
    name?: StringWithAggregatesFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeWithAggregatesFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolWithAggregatesFilter<"DirectoryField"> | boolean
    multiple?: BoolWithAggregatesFilter<"DirectoryField"> | boolean
    order?: IntWithAggregatesFilter<"DirectoryField"> | number
    show_in_list?: BoolWithAggregatesFilter<"DirectoryField"> | boolean
    directory_id?: StringWithAggregatesFilter<"DirectoryField"> | string
  }

  export type DirectoryWhereInput = {
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    id?: StringFilter<"Directory"> | string
    name?: StringFilter<"Directory"> | string
    description?: StringNullableFilter<"Directory"> | string | null
    fields?: DirectoryFieldListRelationFilter
  }

  export type DirectoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fields?: DirectoryFieldOrderByRelationAggregateInput
  }

  export type DirectoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    name?: StringFilter<"Directory"> | string
    description?: StringNullableFilter<"Directory"> | string | null
    fields?: DirectoryFieldListRelationFilter
  }, "id">

  export type DirectoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: DirectoryCountOrderByAggregateInput
    _max?: DirectoryMaxOrderByAggregateInput
    _min?: DirectoryMinOrderByAggregateInput
  }

  export type DirectoryScalarWhereWithAggregatesInput = {
    AND?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    OR?: DirectoryScalarWhereWithAggregatesInput[]
    NOT?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Directory"> | string
    name?: StringWithAggregatesFilter<"Directory"> | string
    description?: StringNullableWithAggregatesFilter<"Directory"> | string | null
  }

  export type DirectoryFieldCreateInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
    directory: DirectoryCreateNestedOneWithoutFieldsInput
  }

  export type DirectoryFieldUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
  }

  export type DirectoryFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory?: DirectoryUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type DirectoryFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryFieldCreateManyInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
    directory_id: string
  }

  export type DirectoryFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectoryFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
    directory_id?: StringFieldUpdateOperationsInput | string
  }

  export type DirectoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fields?: DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput
  }

  export type DirectoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput
  }

  export type DirectoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type DirectoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumDirectoryFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel> | $Enums.DirectoryFieldType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DirectoryRelationFilter = {
    is?: DirectoryWhereInput
    isNot?: DirectoryWhereInput
  }

  export type DirectoryFieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    multiple?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DirectoryFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    multiple?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    multiple?: SortOrder
    order?: SortOrder
    show_in_list?: SortOrder
    directory_id?: SortOrder
  }

  export type DirectoryFieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.DirectoryFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DirectoryFieldListRelationFilter = {
    every?: DirectoryFieldWhereInput
    some?: DirectoryFieldWhereInput
    none?: DirectoryFieldWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DirectoryFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DirectoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DirectoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DirectoryCreateNestedOneWithoutFieldsInput = {
    create?: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutFieldsInput
    connect?: DirectoryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumDirectoryFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.DirectoryFieldType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DirectoryUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: DirectoryCreateOrConnectWithoutFieldsInput
    upsert?: DirectoryUpsertWithoutFieldsInput
    connect?: DirectoryWhereUniqueInput
    update?: XOR<XOR<DirectoryUpdateToOneWithWhereWithoutFieldsInput, DirectoryUpdateWithoutFieldsInput>, DirectoryUncheckedUpdateWithoutFieldsInput>
  }

  export type DirectoryFieldCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
  }

  export type DirectoryFieldUncheckedCreateNestedManyWithoutDirectoryInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DirectoryFieldUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    upsert?: DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    set?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    disconnect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    delete?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    update?: DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput | DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
  }

  export type DirectoryFieldUncheckedUpdateManyWithoutDirectoryNestedInput = {
    create?: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput> | DirectoryFieldCreateWithoutDirectoryInput[] | DirectoryFieldUncheckedCreateWithoutDirectoryInput[]
    connectOrCreate?: DirectoryFieldCreateOrConnectWithoutDirectoryInput | DirectoryFieldCreateOrConnectWithoutDirectoryInput[]
    upsert?: DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput[]
    createMany?: DirectoryFieldCreateManyDirectoryInputEnvelope
    set?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    disconnect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    delete?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    connect?: DirectoryFieldWhereUniqueInput | DirectoryFieldWhereUniqueInput[]
    update?: DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput | DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput[]
    updateMany?: DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput | DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput[]
    deleteMany?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumDirectoryFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel> | $Enums.DirectoryFieldType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DirectoryFieldType | EnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DirectoryFieldType[] | ListEnumDirectoryFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectoryFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.DirectoryFieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumDirectoryFieldTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DirectoryCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type DirectoryUncheckedCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type DirectoryCreateOrConnectWithoutFieldsInput = {
    where: DirectoryWhereUniqueInput
    create: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
  }

  export type DirectoryUpsertWithoutFieldsInput = {
    update: XOR<DirectoryUpdateWithoutFieldsInput, DirectoryUncheckedUpdateWithoutFieldsInput>
    create: XOR<DirectoryCreateWithoutFieldsInput, DirectoryUncheckedCreateWithoutFieldsInput>
    where?: DirectoryWhereInput
  }

  export type DirectoryUpdateToOneWithWhereWithoutFieldsInput = {
    where?: DirectoryWhereInput
    data: XOR<DirectoryUpdateWithoutFieldsInput, DirectoryUncheckedUpdateWithoutFieldsInput>
  }

  export type DirectoryUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryFieldCreateWithoutDirectoryInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
  }

  export type DirectoryFieldUncheckedCreateWithoutDirectoryInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
  }

  export type DirectoryFieldCreateOrConnectWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    create: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput>
  }

  export type DirectoryFieldCreateManyDirectoryInputEnvelope = {
    data: DirectoryFieldCreateManyDirectoryInput | DirectoryFieldCreateManyDirectoryInput[]
    skipDuplicates?: boolean
  }

  export type DirectoryFieldUpsertWithWhereUniqueWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    update: XOR<DirectoryFieldUpdateWithoutDirectoryInput, DirectoryFieldUncheckedUpdateWithoutDirectoryInput>
    create: XOR<DirectoryFieldCreateWithoutDirectoryInput, DirectoryFieldUncheckedCreateWithoutDirectoryInput>
  }

  export type DirectoryFieldUpdateWithWhereUniqueWithoutDirectoryInput = {
    where: DirectoryFieldWhereUniqueInput
    data: XOR<DirectoryFieldUpdateWithoutDirectoryInput, DirectoryFieldUncheckedUpdateWithoutDirectoryInput>
  }

  export type DirectoryFieldUpdateManyWithWhereWithoutDirectoryInput = {
    where: DirectoryFieldScalarWhereInput
    data: XOR<DirectoryFieldUpdateManyMutationInput, DirectoryFieldUncheckedUpdateManyWithoutDirectoryInput>
  }

  export type DirectoryFieldScalarWhereInput = {
    AND?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
    OR?: DirectoryFieldScalarWhereInput[]
    NOT?: DirectoryFieldScalarWhereInput | DirectoryFieldScalarWhereInput[]
    id?: StringFilter<"DirectoryField"> | string
    name?: StringFilter<"DirectoryField"> | string
    type?: EnumDirectoryFieldTypeFilter<"DirectoryField"> | $Enums.DirectoryFieldType
    required?: BoolFilter<"DirectoryField"> | boolean
    multiple?: BoolFilter<"DirectoryField"> | boolean
    order?: IntFilter<"DirectoryField"> | number
    show_in_list?: BoolFilter<"DirectoryField"> | boolean
    directory_id?: StringFilter<"DirectoryField"> | string
  }

  export type DirectoryFieldCreateManyDirectoryInput = {
    id?: string
    name: string
    type: $Enums.DirectoryFieldType
    required?: boolean
    multiple?: boolean
    order: number
    show_in_list?: boolean
  }

  export type DirectoryFieldUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectoryFieldUncheckedUpdateWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DirectoryFieldUncheckedUpdateManyWithoutDirectoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDirectoryFieldTypeFieldUpdateOperationsInput | $Enums.DirectoryFieldType
    required?: BoolFieldUpdateOperationsInput | boolean
    multiple?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    show_in_list?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DirectoryCountOutputTypeDefaultArgs instead
     */
    export type DirectoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectoryFieldDefaultArgs instead
     */
    export type DirectoryFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectoryFieldDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectoryDefaultArgs instead
     */
    export type DirectoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}