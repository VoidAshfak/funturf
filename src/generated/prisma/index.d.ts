
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TurfmateRequests
 * 
 */
export type TurfmateRequests = $Result.DefaultSelection<Prisma.$TurfmateRequestsPayload>
/**
 * Model Turfmates
 * 
 */
export type Turfmates = $Result.DefaultSelection<Prisma.$TurfmatesPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PLAYER: 'PLAYER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Sports: {
  FOOTBALL: 'FOOTBALL',
  BADMINTON: 'BADMINTON',
  CRICKET: 'CRICKET'
};

export type Sports = (typeof Sports)[keyof typeof Sports]


export const FriendStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type FriendStatus = (typeof FriendStatus)[keyof typeof FriendStatus]


export const EventStatus: {
  PENDING: 'PENDING',
  ENDED: 'ENDED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  REFUND: 'REFUND'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Sports = $Enums.Sports

export const Sports: typeof $Enums.Sports

export type FriendStatus = $Enums.FriendStatus

export const FriendStatus: typeof $Enums.FriendStatus

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turfmateRequests`: Exposes CRUD operations for the **TurfmateRequests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TurfmateRequests
    * const turfmateRequests = await prisma.turfmateRequests.findMany()
    * ```
    */
  get turfmateRequests(): Prisma.TurfmateRequestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turfmates`: Exposes CRUD operations for the **Turfmates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turfmates
    * const turfmates = await prisma.turfmates.findMany()
    * ```
    */
  get turfmates(): Prisma.TurfmatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    TurfmateRequests: 'TurfmateRequests',
    Turfmates: 'Turfmates',
    Event: 'Event',
    Venue: 'Venue',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "turfmateRequests" | "turfmates" | "event" | "venue" | "booking"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TurfmateRequests: {
        payload: Prisma.$TurfmateRequestsPayload<ExtArgs>
        fields: Prisma.TurfmateRequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurfmateRequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurfmateRequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          findFirst: {
            args: Prisma.TurfmateRequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurfmateRequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          findMany: {
            args: Prisma.TurfmateRequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>[]
          }
          create: {
            args: Prisma.TurfmateRequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          createMany: {
            args: Prisma.TurfmateRequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurfmateRequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          update: {
            args: Prisma.TurfmateRequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          deleteMany: {
            args: Prisma.TurfmateRequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurfmateRequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurfmateRequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmateRequestsPayload>
          }
          aggregate: {
            args: Prisma.TurfmateRequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurfmateRequests>
          }
          groupBy: {
            args: Prisma.TurfmateRequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurfmateRequestsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurfmateRequestsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurfmateRequestsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TurfmateRequestsCountArgs<ExtArgs>
            result: $Utils.Optional<TurfmateRequestsCountAggregateOutputType> | number
          }
        }
      }
      Turfmates: {
        payload: Prisma.$TurfmatesPayload<ExtArgs>
        fields: Prisma.TurfmatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurfmatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurfmatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          findFirst: {
            args: Prisma.TurfmatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurfmatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          findMany: {
            args: Prisma.TurfmatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>[]
          }
          create: {
            args: Prisma.TurfmatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          createMany: {
            args: Prisma.TurfmatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurfmatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          update: {
            args: Prisma.TurfmatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          deleteMany: {
            args: Prisma.TurfmatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurfmatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurfmatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurfmatesPayload>
          }
          aggregate: {
            args: Prisma.TurfmatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurfmates>
          }
          groupBy: {
            args: Prisma.TurfmatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurfmatesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurfmatesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurfmatesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TurfmatesCountArgs<ExtArgs>
            result: $Utils.Optional<TurfmatesCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VenueFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VenueAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    turfmateRequests?: TurfmateRequestsOmit
    turfmates?: TurfmatesOmit
    event?: EventOmit
    venue?: VenueOmit
    booking?: BookingOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentRequests: number
    receivedRequests: number
    eventsOrganized: number
    bookings: number
    turfmates: number
    turfmateOf: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRequests?: boolean | UserCountOutputTypeCountSentRequestsArgs
    receivedRequests?: boolean | UserCountOutputTypeCountReceivedRequestsArgs
    eventsOrganized?: boolean | UserCountOutputTypeCountEventsOrganizedArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    turfmates?: boolean | UserCountOutputTypeCountTurfmatesArgs
    turfmateOf?: boolean | UserCountOutputTypeCountTurfmateOfArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmateRequestsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmateRequestsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTurfmatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmatesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTurfmateOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmatesWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    bookings: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EventCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    eventsOrganized: number
    bookings: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventsOrganized?: boolean | VenueCountOutputTypeCountEventsOrganizedArgs
    bookings?: boolean | VenueCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountEventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    address: string | null
    bio: string | null
    phone: string | null
    profilePicture: string | null
    sportsPreferences: $Enums.Sports | null
    role: $Enums.Role | null
    rating: number | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    address: string | null
    bio: string | null
    phone: string | null
    profilePicture: string | null
    sportsPreferences: $Enums.Sports | null
    role: $Enums.Role | null
    rating: number | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    address: number
    bio: number
    phone: number
    profilePicture: number
    sportsPreferences: number
    eventsJoined: number
    role: number
    rating: number
    refreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    address?: true
    bio?: true
    phone?: true
    profilePicture?: true
    sportsPreferences?: true
    role?: true
    rating?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    address?: true
    bio?: true
    phone?: true
    profilePicture?: true
    sportsPreferences?: true
    role?: true
    rating?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    address?: true
    bio?: true
    phone?: true
    profilePicture?: true
    sportsPreferences?: true
    eventsJoined?: true
    role?: true
    rating?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    address: string | null
    bio: string | null
    phone: string
    profilePicture: string | null
    sportsPreferences: $Enums.Sports | null
    eventsJoined: string[]
    role: $Enums.Role
    rating: number
    refreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    address?: boolean
    bio?: boolean
    phone?: boolean
    profilePicture?: boolean
    sportsPreferences?: boolean
    eventsJoined?: boolean
    role?: boolean
    rating?: boolean
    refreshToken?: boolean
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    eventsOrganized?: boolean | User$eventsOrganizedArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    turfmates?: boolean | User$turfmatesArgs<ExtArgs>
    turfmateOf?: boolean | User$turfmateOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    address?: boolean
    bio?: boolean
    phone?: boolean
    profilePicture?: boolean
    sportsPreferences?: boolean
    eventsJoined?: boolean
    role?: boolean
    rating?: boolean
    refreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "address" | "bio" | "phone" | "profilePicture" | "sportsPreferences" | "eventsJoined" | "role" | "rating" | "refreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRequests?: boolean | User$sentRequestsArgs<ExtArgs>
    receivedRequests?: boolean | User$receivedRequestsArgs<ExtArgs>
    eventsOrganized?: boolean | User$eventsOrganizedArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    turfmates?: boolean | User$turfmatesArgs<ExtArgs>
    turfmateOf?: boolean | User$turfmateOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentRequests: Prisma.$TurfmateRequestsPayload<ExtArgs>[]
      receivedRequests: Prisma.$TurfmateRequestsPayload<ExtArgs>[]
      eventsOrganized: Prisma.$EventPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      turfmates: Prisma.$TurfmatesPayload<ExtArgs>[]
      turfmateOf: Prisma.$TurfmatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      address: string | null
      bio: string | null
      phone: string
      profilePicture: string | null
      sportsPreferences: $Enums.Sports | null
      eventsJoined: string[]
      role: $Enums.Role
      rating: number
      refreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentRequests<T extends User$sentRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRequests<T extends User$receivedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventsOrganized<T extends User$eventsOrganizedArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsOrganizedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turfmates<T extends User$turfmatesArgs<ExtArgs> = {}>(args?: Subset<T, User$turfmatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turfmateOf<T extends User$turfmateOfArgs<ExtArgs> = {}>(args?: Subset<T, User$turfmateOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly sportsPreferences: FieldRef<"User", 'Sports'>
    readonly eventsJoined: FieldRef<"User", 'String[]'>
    readonly role: FieldRef<"User", 'Role'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.sentRequests
   */
  export type User$sentRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    where?: TurfmateRequestsWhereInput
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    cursor?: TurfmateRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurfmateRequestsScalarFieldEnum | TurfmateRequestsScalarFieldEnum[]
  }

  /**
   * User.receivedRequests
   */
  export type User$receivedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    where?: TurfmateRequestsWhereInput
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    cursor?: TurfmateRequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurfmateRequestsScalarFieldEnum | TurfmateRequestsScalarFieldEnum[]
  }

  /**
   * User.eventsOrganized
   */
  export type User$eventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.turfmates
   */
  export type User$turfmatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    where?: TurfmatesWhereInput
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    cursor?: TurfmatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurfmatesScalarFieldEnum | TurfmatesScalarFieldEnum[]
  }

  /**
   * User.turfmateOf
   */
  export type User$turfmateOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    where?: TurfmatesWhereInput
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    cursor?: TurfmatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurfmatesScalarFieldEnum | TurfmatesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TurfmateRequests
   */

  export type AggregateTurfmateRequests = {
    _count: TurfmateRequestsCountAggregateOutputType | null
    _min: TurfmateRequestsMinAggregateOutputType | null
    _max: TurfmateRequestsMaxAggregateOutputType | null
  }

  export type TurfmateRequestsMinAggregateOutputType = {
    id: string | null
    sender: string | null
    receiver: string | null
    status: $Enums.FriendStatus | null
    createdAt: Date | null
  }

  export type TurfmateRequestsMaxAggregateOutputType = {
    id: string | null
    sender: string | null
    receiver: string | null
    status: $Enums.FriendStatus | null
    createdAt: Date | null
  }

  export type TurfmateRequestsCountAggregateOutputType = {
    id: number
    sender: number
    receiver: number
    status: number
    createdAt: number
    _all: number
  }


  export type TurfmateRequestsMinAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    status?: true
    createdAt?: true
  }

  export type TurfmateRequestsMaxAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    status?: true
    createdAt?: true
  }

  export type TurfmateRequestsCountAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TurfmateRequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurfmateRequests to aggregate.
     */
    where?: TurfmateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurfmateRequests to fetch.
     */
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurfmateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurfmateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurfmateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TurfmateRequests
    **/
    _count?: true | TurfmateRequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurfmateRequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurfmateRequestsMaxAggregateInputType
  }

  export type GetTurfmateRequestsAggregateType<T extends TurfmateRequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateTurfmateRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurfmateRequests[P]>
      : GetScalarType<T[P], AggregateTurfmateRequests[P]>
  }




  export type TurfmateRequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmateRequestsWhereInput
    orderBy?: TurfmateRequestsOrderByWithAggregationInput | TurfmateRequestsOrderByWithAggregationInput[]
    by: TurfmateRequestsScalarFieldEnum[] | TurfmateRequestsScalarFieldEnum
    having?: TurfmateRequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurfmateRequestsCountAggregateInputType | true
    _min?: TurfmateRequestsMinAggregateInputType
    _max?: TurfmateRequestsMaxAggregateInputType
  }

  export type TurfmateRequestsGroupByOutputType = {
    id: string
    sender: string
    receiver: string
    status: $Enums.FriendStatus
    createdAt: Date
    _count: TurfmateRequestsCountAggregateOutputType | null
    _min: TurfmateRequestsMinAggregateOutputType | null
    _max: TurfmateRequestsMaxAggregateOutputType | null
  }

  type GetTurfmateRequestsGroupByPayload<T extends TurfmateRequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurfmateRequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurfmateRequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurfmateRequestsGroupByOutputType[P]>
            : GetScalarType<T[P], TurfmateRequestsGroupByOutputType[P]>
        }
      >
    >


  export type TurfmateRequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    status?: boolean
    createdAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turfmateRequests"]>



  export type TurfmateRequestsSelectScalar = {
    id?: boolean
    sender?: boolean
    receiver?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TurfmateRequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender" | "receiver" | "status" | "createdAt", ExtArgs["result"]["turfmateRequests"]>
  export type TurfmateRequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TurfmateRequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TurfmateRequests"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sender: string
      receiver: string
      status: $Enums.FriendStatus
      createdAt: Date
    }, ExtArgs["result"]["turfmateRequests"]>
    composites: {}
  }

  type TurfmateRequestsGetPayload<S extends boolean | null | undefined | TurfmateRequestsDefaultArgs> = $Result.GetResult<Prisma.$TurfmateRequestsPayload, S>

  type TurfmateRequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurfmateRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurfmateRequestsCountAggregateInputType | true
    }

  export interface TurfmateRequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TurfmateRequests'], meta: { name: 'TurfmateRequests' } }
    /**
     * Find zero or one TurfmateRequests that matches the filter.
     * @param {TurfmateRequestsFindUniqueArgs} args - Arguments to find a TurfmateRequests
     * @example
     * // Get one TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurfmateRequestsFindUniqueArgs>(args: SelectSubset<T, TurfmateRequestsFindUniqueArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TurfmateRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurfmateRequestsFindUniqueOrThrowArgs} args - Arguments to find a TurfmateRequests
     * @example
     * // Get one TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurfmateRequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, TurfmateRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurfmateRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsFindFirstArgs} args - Arguments to find a TurfmateRequests
     * @example
     * // Get one TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurfmateRequestsFindFirstArgs>(args?: SelectSubset<T, TurfmateRequestsFindFirstArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurfmateRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsFindFirstOrThrowArgs} args - Arguments to find a TurfmateRequests
     * @example
     * // Get one TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurfmateRequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, TurfmateRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurfmateRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findMany()
     * 
     * // Get first 10 TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turfmateRequestsWithIdOnly = await prisma.turfmateRequests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurfmateRequestsFindManyArgs>(args?: SelectSubset<T, TurfmateRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TurfmateRequests.
     * @param {TurfmateRequestsCreateArgs} args - Arguments to create a TurfmateRequests.
     * @example
     * // Create one TurfmateRequests
     * const TurfmateRequests = await prisma.turfmateRequests.create({
     *   data: {
     *     // ... data to create a TurfmateRequests
     *   }
     * })
     * 
     */
    create<T extends TurfmateRequestsCreateArgs>(args: SelectSubset<T, TurfmateRequestsCreateArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TurfmateRequests.
     * @param {TurfmateRequestsCreateManyArgs} args - Arguments to create many TurfmateRequests.
     * @example
     * // Create many TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurfmateRequestsCreateManyArgs>(args?: SelectSubset<T, TurfmateRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TurfmateRequests.
     * @param {TurfmateRequestsDeleteArgs} args - Arguments to delete one TurfmateRequests.
     * @example
     * // Delete one TurfmateRequests
     * const TurfmateRequests = await prisma.turfmateRequests.delete({
     *   where: {
     *     // ... filter to delete one TurfmateRequests
     *   }
     * })
     * 
     */
    delete<T extends TurfmateRequestsDeleteArgs>(args: SelectSubset<T, TurfmateRequestsDeleteArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TurfmateRequests.
     * @param {TurfmateRequestsUpdateArgs} args - Arguments to update one TurfmateRequests.
     * @example
     * // Update one TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurfmateRequestsUpdateArgs>(args: SelectSubset<T, TurfmateRequestsUpdateArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TurfmateRequests.
     * @param {TurfmateRequestsDeleteManyArgs} args - Arguments to filter TurfmateRequests to delete.
     * @example
     * // Delete a few TurfmateRequests
     * const { count } = await prisma.turfmateRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurfmateRequestsDeleteManyArgs>(args?: SelectSubset<T, TurfmateRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TurfmateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurfmateRequestsUpdateManyArgs>(args: SelectSubset<T, TurfmateRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TurfmateRequests.
     * @param {TurfmateRequestsUpsertArgs} args - Arguments to update or create a TurfmateRequests.
     * @example
     * // Update or create a TurfmateRequests
     * const turfmateRequests = await prisma.turfmateRequests.upsert({
     *   create: {
     *     // ... data to create a TurfmateRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TurfmateRequests we want to update
     *   }
     * })
     */
    upsert<T extends TurfmateRequestsUpsertArgs>(args: SelectSubset<T, TurfmateRequestsUpsertArgs<ExtArgs>>): Prisma__TurfmateRequestsClient<$Result.GetResult<Prisma.$TurfmateRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurfmateRequests that matches the filter.
     * @param {TurfmateRequestsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turfmateRequests = await prisma.turfmateRequests.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TurfmateRequestsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TurfmateRequests.
     * @param {TurfmateRequestsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turfmateRequests = await prisma.turfmateRequests.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TurfmateRequestsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TurfmateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsCountArgs} args - Arguments to filter TurfmateRequests to count.
     * @example
     * // Count the number of TurfmateRequests
     * const count = await prisma.turfmateRequests.count({
     *   where: {
     *     // ... the filter for the TurfmateRequests we want to count
     *   }
     * })
    **/
    count<T extends TurfmateRequestsCountArgs>(
      args?: Subset<T, TurfmateRequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurfmateRequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TurfmateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurfmateRequestsAggregateArgs>(args: Subset<T, TurfmateRequestsAggregateArgs>): Prisma.PrismaPromise<GetTurfmateRequestsAggregateType<T>>

    /**
     * Group by TurfmateRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmateRequestsGroupByArgs} args - Group by arguments.
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
      T extends TurfmateRequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurfmateRequestsGroupByArgs['orderBy'] }
        : { orderBy?: TurfmateRequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurfmateRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurfmateRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TurfmateRequests model
   */
  readonly fields: TurfmateRequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TurfmateRequests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurfmateRequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TurfmateRequests model
   */
  interface TurfmateRequestsFieldRefs {
    readonly id: FieldRef<"TurfmateRequests", 'String'>
    readonly sender: FieldRef<"TurfmateRequests", 'String'>
    readonly receiver: FieldRef<"TurfmateRequests", 'String'>
    readonly status: FieldRef<"TurfmateRequests", 'FriendStatus'>
    readonly createdAt: FieldRef<"TurfmateRequests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TurfmateRequests findUnique
   */
  export type TurfmateRequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which TurfmateRequests to fetch.
     */
    where: TurfmateRequestsWhereUniqueInput
  }

  /**
   * TurfmateRequests findUniqueOrThrow
   */
  export type TurfmateRequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which TurfmateRequests to fetch.
     */
    where: TurfmateRequestsWhereUniqueInput
  }

  /**
   * TurfmateRequests findFirst
   */
  export type TurfmateRequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which TurfmateRequests to fetch.
     */
    where?: TurfmateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurfmateRequests to fetch.
     */
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurfmateRequests.
     */
    cursor?: TurfmateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurfmateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurfmateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurfmateRequests.
     */
    distinct?: TurfmateRequestsScalarFieldEnum | TurfmateRequestsScalarFieldEnum[]
  }

  /**
   * TurfmateRequests findFirstOrThrow
   */
  export type TurfmateRequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which TurfmateRequests to fetch.
     */
    where?: TurfmateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurfmateRequests to fetch.
     */
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurfmateRequests.
     */
    cursor?: TurfmateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurfmateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurfmateRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurfmateRequests.
     */
    distinct?: TurfmateRequestsScalarFieldEnum | TurfmateRequestsScalarFieldEnum[]
  }

  /**
   * TurfmateRequests findMany
   */
  export type TurfmateRequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter, which TurfmateRequests to fetch.
     */
    where?: TurfmateRequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurfmateRequests to fetch.
     */
    orderBy?: TurfmateRequestsOrderByWithRelationInput | TurfmateRequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TurfmateRequests.
     */
    cursor?: TurfmateRequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurfmateRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurfmateRequests.
     */
    skip?: number
    distinct?: TurfmateRequestsScalarFieldEnum | TurfmateRequestsScalarFieldEnum[]
  }

  /**
   * TurfmateRequests create
   */
  export type TurfmateRequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a TurfmateRequests.
     */
    data: XOR<TurfmateRequestsCreateInput, TurfmateRequestsUncheckedCreateInput>
  }

  /**
   * TurfmateRequests createMany
   */
  export type TurfmateRequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TurfmateRequests.
     */
    data: TurfmateRequestsCreateManyInput | TurfmateRequestsCreateManyInput[]
  }

  /**
   * TurfmateRequests update
   */
  export type TurfmateRequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a TurfmateRequests.
     */
    data: XOR<TurfmateRequestsUpdateInput, TurfmateRequestsUncheckedUpdateInput>
    /**
     * Choose, which TurfmateRequests to update.
     */
    where: TurfmateRequestsWhereUniqueInput
  }

  /**
   * TurfmateRequests updateMany
   */
  export type TurfmateRequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TurfmateRequests.
     */
    data: XOR<TurfmateRequestsUpdateManyMutationInput, TurfmateRequestsUncheckedUpdateManyInput>
    /**
     * Filter which TurfmateRequests to update
     */
    where?: TurfmateRequestsWhereInput
    /**
     * Limit how many TurfmateRequests to update.
     */
    limit?: number
  }

  /**
   * TurfmateRequests upsert
   */
  export type TurfmateRequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the TurfmateRequests to update in case it exists.
     */
    where: TurfmateRequestsWhereUniqueInput
    /**
     * In case the TurfmateRequests found by the `where` argument doesn't exist, create a new TurfmateRequests with this data.
     */
    create: XOR<TurfmateRequestsCreateInput, TurfmateRequestsUncheckedCreateInput>
    /**
     * In case the TurfmateRequests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurfmateRequestsUpdateInput, TurfmateRequestsUncheckedUpdateInput>
  }

  /**
   * TurfmateRequests delete
   */
  export type TurfmateRequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
    /**
     * Filter which TurfmateRequests to delete.
     */
    where: TurfmateRequestsWhereUniqueInput
  }

  /**
   * TurfmateRequests deleteMany
   */
  export type TurfmateRequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurfmateRequests to delete
     */
    where?: TurfmateRequestsWhereInput
    /**
     * Limit how many TurfmateRequests to delete.
     */
    limit?: number
  }

  /**
   * TurfmateRequests findRaw
   */
  export type TurfmateRequestsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurfmateRequests aggregateRaw
   */
  export type TurfmateRequestsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurfmateRequests without action
   */
  export type TurfmateRequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurfmateRequests
     */
    select?: TurfmateRequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurfmateRequests
     */
    omit?: TurfmateRequestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmateRequestsInclude<ExtArgs> | null
  }


  /**
   * Model Turfmates
   */

  export type AggregateTurfmates = {
    _count: TurfmatesCountAggregateOutputType | null
    _min: TurfmatesMinAggregateOutputType | null
    _max: TurfmatesMaxAggregateOutputType | null
  }

  export type TurfmatesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    turfmateId: string | null
    createdAt: Date | null
  }

  export type TurfmatesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    turfmateId: string | null
    createdAt: Date | null
  }

  export type TurfmatesCountAggregateOutputType = {
    id: number
    userId: number
    turfmateId: number
    createdAt: number
    _all: number
  }


  export type TurfmatesMinAggregateInputType = {
    id?: true
    userId?: true
    turfmateId?: true
    createdAt?: true
  }

  export type TurfmatesMaxAggregateInputType = {
    id?: true
    userId?: true
    turfmateId?: true
    createdAt?: true
  }

  export type TurfmatesCountAggregateInputType = {
    id?: true
    userId?: true
    turfmateId?: true
    createdAt?: true
    _all?: true
  }

  export type TurfmatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turfmates to aggregate.
     */
    where?: TurfmatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turfmates to fetch.
     */
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurfmatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turfmates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turfmates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turfmates
    **/
    _count?: true | TurfmatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurfmatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurfmatesMaxAggregateInputType
  }

  export type GetTurfmatesAggregateType<T extends TurfmatesAggregateArgs> = {
        [P in keyof T & keyof AggregateTurfmates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurfmates[P]>
      : GetScalarType<T[P], AggregateTurfmates[P]>
  }




  export type TurfmatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurfmatesWhereInput
    orderBy?: TurfmatesOrderByWithAggregationInput | TurfmatesOrderByWithAggregationInput[]
    by: TurfmatesScalarFieldEnum[] | TurfmatesScalarFieldEnum
    having?: TurfmatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurfmatesCountAggregateInputType | true
    _min?: TurfmatesMinAggregateInputType
    _max?: TurfmatesMaxAggregateInputType
  }

  export type TurfmatesGroupByOutputType = {
    id: string
    userId: string
    turfmateId: string
    createdAt: Date
    _count: TurfmatesCountAggregateOutputType | null
    _min: TurfmatesMinAggregateOutputType | null
    _max: TurfmatesMaxAggregateOutputType | null
  }

  type GetTurfmatesGroupByPayload<T extends TurfmatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurfmatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurfmatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurfmatesGroupByOutputType[P]>
            : GetScalarType<T[P], TurfmatesGroupByOutputType[P]>
        }
      >
    >


  export type TurfmatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    turfmateId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    turfmate?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turfmates"]>



  export type TurfmatesSelectScalar = {
    id?: boolean
    userId?: boolean
    turfmateId?: boolean
    createdAt?: boolean
  }

  export type TurfmatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "turfmateId" | "createdAt", ExtArgs["result"]["turfmates"]>
  export type TurfmatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    turfmate?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TurfmatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turfmates"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      turfmate: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      turfmateId: string
      createdAt: Date
    }, ExtArgs["result"]["turfmates"]>
    composites: {}
  }

  type TurfmatesGetPayload<S extends boolean | null | undefined | TurfmatesDefaultArgs> = $Result.GetResult<Prisma.$TurfmatesPayload, S>

  type TurfmatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurfmatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurfmatesCountAggregateInputType | true
    }

  export interface TurfmatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turfmates'], meta: { name: 'Turfmates' } }
    /**
     * Find zero or one Turfmates that matches the filter.
     * @param {TurfmatesFindUniqueArgs} args - Arguments to find a Turfmates
     * @example
     * // Get one Turfmates
     * const turfmates = await prisma.turfmates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurfmatesFindUniqueArgs>(args: SelectSubset<T, TurfmatesFindUniqueArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turfmates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurfmatesFindUniqueOrThrowArgs} args - Arguments to find a Turfmates
     * @example
     * // Get one Turfmates
     * const turfmates = await prisma.turfmates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurfmatesFindUniqueOrThrowArgs>(args: SelectSubset<T, TurfmatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turfmates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesFindFirstArgs} args - Arguments to find a Turfmates
     * @example
     * // Get one Turfmates
     * const turfmates = await prisma.turfmates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurfmatesFindFirstArgs>(args?: SelectSubset<T, TurfmatesFindFirstArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turfmates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesFindFirstOrThrowArgs} args - Arguments to find a Turfmates
     * @example
     * // Get one Turfmates
     * const turfmates = await prisma.turfmates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurfmatesFindFirstOrThrowArgs>(args?: SelectSubset<T, TurfmatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turfmates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turfmates
     * const turfmates = await prisma.turfmates.findMany()
     * 
     * // Get first 10 Turfmates
     * const turfmates = await prisma.turfmates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turfmatesWithIdOnly = await prisma.turfmates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurfmatesFindManyArgs>(args?: SelectSubset<T, TurfmatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turfmates.
     * @param {TurfmatesCreateArgs} args - Arguments to create a Turfmates.
     * @example
     * // Create one Turfmates
     * const Turfmates = await prisma.turfmates.create({
     *   data: {
     *     // ... data to create a Turfmates
     *   }
     * })
     * 
     */
    create<T extends TurfmatesCreateArgs>(args: SelectSubset<T, TurfmatesCreateArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turfmates.
     * @param {TurfmatesCreateManyArgs} args - Arguments to create many Turfmates.
     * @example
     * // Create many Turfmates
     * const turfmates = await prisma.turfmates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurfmatesCreateManyArgs>(args?: SelectSubset<T, TurfmatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turfmates.
     * @param {TurfmatesDeleteArgs} args - Arguments to delete one Turfmates.
     * @example
     * // Delete one Turfmates
     * const Turfmates = await prisma.turfmates.delete({
     *   where: {
     *     // ... filter to delete one Turfmates
     *   }
     * })
     * 
     */
    delete<T extends TurfmatesDeleteArgs>(args: SelectSubset<T, TurfmatesDeleteArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turfmates.
     * @param {TurfmatesUpdateArgs} args - Arguments to update one Turfmates.
     * @example
     * // Update one Turfmates
     * const turfmates = await prisma.turfmates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurfmatesUpdateArgs>(args: SelectSubset<T, TurfmatesUpdateArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turfmates.
     * @param {TurfmatesDeleteManyArgs} args - Arguments to filter Turfmates to delete.
     * @example
     * // Delete a few Turfmates
     * const { count } = await prisma.turfmates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurfmatesDeleteManyArgs>(args?: SelectSubset<T, TurfmatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turfmates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turfmates
     * const turfmates = await prisma.turfmates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurfmatesUpdateManyArgs>(args: SelectSubset<T, TurfmatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turfmates.
     * @param {TurfmatesUpsertArgs} args - Arguments to update or create a Turfmates.
     * @example
     * // Update or create a Turfmates
     * const turfmates = await prisma.turfmates.upsert({
     *   create: {
     *     // ... data to create a Turfmates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turfmates we want to update
     *   }
     * })
     */
    upsert<T extends TurfmatesUpsertArgs>(args: SelectSubset<T, TurfmatesUpsertArgs<ExtArgs>>): Prisma__TurfmatesClient<$Result.GetResult<Prisma.$TurfmatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turfmates that matches the filter.
     * @param {TurfmatesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turfmates = await prisma.turfmates.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TurfmatesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Turfmates.
     * @param {TurfmatesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turfmates = await prisma.turfmates.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TurfmatesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Turfmates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesCountArgs} args - Arguments to filter Turfmates to count.
     * @example
     * // Count the number of Turfmates
     * const count = await prisma.turfmates.count({
     *   where: {
     *     // ... the filter for the Turfmates we want to count
     *   }
     * })
    **/
    count<T extends TurfmatesCountArgs>(
      args?: Subset<T, TurfmatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurfmatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turfmates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurfmatesAggregateArgs>(args: Subset<T, TurfmatesAggregateArgs>): Prisma.PrismaPromise<GetTurfmatesAggregateType<T>>

    /**
     * Group by Turfmates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurfmatesGroupByArgs} args - Group by arguments.
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
      T extends TurfmatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurfmatesGroupByArgs['orderBy'] }
        : { orderBy?: TurfmatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurfmatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurfmatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turfmates model
   */
  readonly fields: TurfmatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turfmates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurfmatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turfmate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Turfmates model
   */
  interface TurfmatesFieldRefs {
    readonly id: FieldRef<"Turfmates", 'String'>
    readonly userId: FieldRef<"Turfmates", 'String'>
    readonly turfmateId: FieldRef<"Turfmates", 'String'>
    readonly createdAt: FieldRef<"Turfmates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turfmates findUnique
   */
  export type TurfmatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter, which Turfmates to fetch.
     */
    where: TurfmatesWhereUniqueInput
  }

  /**
   * Turfmates findUniqueOrThrow
   */
  export type TurfmatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter, which Turfmates to fetch.
     */
    where: TurfmatesWhereUniqueInput
  }

  /**
   * Turfmates findFirst
   */
  export type TurfmatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter, which Turfmates to fetch.
     */
    where?: TurfmatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turfmates to fetch.
     */
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turfmates.
     */
    cursor?: TurfmatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turfmates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turfmates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turfmates.
     */
    distinct?: TurfmatesScalarFieldEnum | TurfmatesScalarFieldEnum[]
  }

  /**
   * Turfmates findFirstOrThrow
   */
  export type TurfmatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter, which Turfmates to fetch.
     */
    where?: TurfmatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turfmates to fetch.
     */
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turfmates.
     */
    cursor?: TurfmatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turfmates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turfmates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turfmates.
     */
    distinct?: TurfmatesScalarFieldEnum | TurfmatesScalarFieldEnum[]
  }

  /**
   * Turfmates findMany
   */
  export type TurfmatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter, which Turfmates to fetch.
     */
    where?: TurfmatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turfmates to fetch.
     */
    orderBy?: TurfmatesOrderByWithRelationInput | TurfmatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turfmates.
     */
    cursor?: TurfmatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turfmates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turfmates.
     */
    skip?: number
    distinct?: TurfmatesScalarFieldEnum | TurfmatesScalarFieldEnum[]
  }

  /**
   * Turfmates create
   */
  export type TurfmatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * The data needed to create a Turfmates.
     */
    data: XOR<TurfmatesCreateInput, TurfmatesUncheckedCreateInput>
  }

  /**
   * Turfmates createMany
   */
  export type TurfmatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turfmates.
     */
    data: TurfmatesCreateManyInput | TurfmatesCreateManyInput[]
  }

  /**
   * Turfmates update
   */
  export type TurfmatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * The data needed to update a Turfmates.
     */
    data: XOR<TurfmatesUpdateInput, TurfmatesUncheckedUpdateInput>
    /**
     * Choose, which Turfmates to update.
     */
    where: TurfmatesWhereUniqueInput
  }

  /**
   * Turfmates updateMany
   */
  export type TurfmatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turfmates.
     */
    data: XOR<TurfmatesUpdateManyMutationInput, TurfmatesUncheckedUpdateManyInput>
    /**
     * Filter which Turfmates to update
     */
    where?: TurfmatesWhereInput
    /**
     * Limit how many Turfmates to update.
     */
    limit?: number
  }

  /**
   * Turfmates upsert
   */
  export type TurfmatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * The filter to search for the Turfmates to update in case it exists.
     */
    where: TurfmatesWhereUniqueInput
    /**
     * In case the Turfmates found by the `where` argument doesn't exist, create a new Turfmates with this data.
     */
    create: XOR<TurfmatesCreateInput, TurfmatesUncheckedCreateInput>
    /**
     * In case the Turfmates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurfmatesUpdateInput, TurfmatesUncheckedUpdateInput>
  }

  /**
   * Turfmates delete
   */
  export type TurfmatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
    /**
     * Filter which Turfmates to delete.
     */
    where: TurfmatesWhereUniqueInput
  }

  /**
   * Turfmates deleteMany
   */
  export type TurfmatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turfmates to delete
     */
    where?: TurfmatesWhereInput
    /**
     * Limit how many Turfmates to delete.
     */
    limit?: number
  }

  /**
   * Turfmates findRaw
   */
  export type TurfmatesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Turfmates aggregateRaw
   */
  export type TurfmatesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Turfmates without action
   */
  export type TurfmatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turfmates
     */
    select?: TurfmatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turfmates
     */
    omit?: TurfmatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurfmatesInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    playersRequired: number | null
  }

  export type EventSumAggregateOutputType = {
    playersRequired: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    organizerId: string | null
    sport: $Enums.Sports | null
    date: Date | null
    playersRequired: number | null
    status: $Enums.EventStatus | null
    venueId: string | null
    rules: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    organizerId: string | null
    sport: $Enums.Sports | null
    date: Date | null
    playersRequired: number | null
    status: $Enums.EventStatus | null
    venueId: string | null
    rules: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    organizerId: number
    sport: number
    date: number
    playersRequired: number
    playersJoined: number
    status: number
    venueId: number
    rules: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    playersRequired?: true
  }

  export type EventSumAggregateInputType = {
    playersRequired?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    organizerId?: true
    sport?: true
    date?: true
    playersRequired?: true
    status?: true
    venueId?: true
    rules?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    organizerId?: true
    sport?: true
    date?: true
    playersRequired?: true
    status?: true
    venueId?: true
    rules?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    organizerId?: true
    sport?: true
    date?: true
    playersRequired?: true
    playersJoined?: true
    status?: true
    venueId?: true
    rules?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date
    playersRequired: number
    playersJoined: string[]
    status: $Enums.EventStatus
    venueId: string
    rules: string | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    organizerId?: boolean
    sport?: boolean
    date?: boolean
    playersRequired?: boolean
    playersJoined?: boolean
    status?: boolean
    venueId?: boolean
    rules?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    bookings?: boolean | Event$bookingsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    organizerId?: boolean
    sport?: boolean
    date?: boolean
    playersRequired?: boolean
    playersJoined?: boolean
    status?: boolean
    venueId?: boolean
    rules?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "organizerId" | "sport" | "date" | "playersRequired" | "playersJoined" | "status" | "venueId" | "rules", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    bookings?: boolean | Event$bookingsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      organizerId: string
      sport: $Enums.Sports
      date: Date
      playersRequired: number
      playersJoined: string[]
      status: $Enums.EventStatus
      venueId: string
      rules: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Event$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Event$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly sport: FieldRef<"Event", 'Sports'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly playersRequired: FieldRef<"Event", 'Int'>
    readonly playersJoined: FieldRef<"Event", 'String[]'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly venueId: FieldRef<"Event", 'String'>
    readonly rules: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event.bookings
   */
  export type Event$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    pricePerSlot: number | null
    rating: number | null
  }

  export type VenueSumAggregateOutputType = {
    pricePerSlot: number | null
    rating: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    lat: string | null
    lng: string | null
    sportsAvailable: $Enums.Sports | null
    pricePerSlot: number | null
    contactInfo: string | null
    rating: number | null
    availability: string | null
    about: string | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    lat: string | null
    lng: string | null
    sportsAvailable: $Enums.Sports | null
    pricePerSlot: number | null
    contactInfo: string | null
    rating: number | null
    availability: string | null
    about: string | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    address: number
    lat: number
    lng: number
    sportsAvailable: number
    pricePerSlot: number
    contactInfo: number
    rating: number
    availability: number
    about: number
    facilities: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    pricePerSlot?: true
    rating?: true
  }

  export type VenueSumAggregateInputType = {
    pricePerSlot?: true
    rating?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    sportsAvailable?: true
    pricePerSlot?: true
    contactInfo?: true
    rating?: true
    availability?: true
    about?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    sportsAvailable?: true
    pricePerSlot?: true
    contactInfo?: true
    rating?: true
    availability?: true
    about?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    sportsAvailable?: true
    pricePerSlot?: true
    contactInfo?: true
    rating?: true
    availability?: true
    about?: true
    facilities?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    address: string
    lat: string | null
    lng: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot: number | null
    contactInfo: string | null
    rating: number
    availability: string
    about: string | null
    facilities: string[]
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    sportsAvailable?: boolean
    pricePerSlot?: boolean
    contactInfo?: boolean
    rating?: boolean
    availability?: boolean
    about?: boolean
    facilities?: boolean
    eventsOrganized?: boolean | Venue$eventsOrganizedArgs<ExtArgs>
    bookings?: boolean | Venue$bookingsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>



  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    sportsAvailable?: boolean
    pricePerSlot?: boolean
    contactInfo?: boolean
    rating?: boolean
    availability?: boolean
    about?: boolean
    facilities?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "lat" | "lng" | "sportsAvailable" | "pricePerSlot" | "contactInfo" | "rating" | "availability" | "about" | "facilities", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventsOrganized?: boolean | Venue$eventsOrganizedArgs<ExtArgs>
    bookings?: boolean | Venue$bookingsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      eventsOrganized: Prisma.$EventPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      lat: string | null
      lng: string | null
      sportsAvailable: $Enums.Sports
      pricePerSlot: number | null
      contactInfo: string | null
      rating: number
      availability: string
      about: string | null
      facilities: string[]
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * @param {VenueFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const venue = await prisma.venue.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VenueFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Venue.
     * @param {VenueAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const venue = await prisma.venue.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VenueAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventsOrganized<T extends Venue$eventsOrganizedArgs<ExtArgs> = {}>(args?: Subset<T, Venue$eventsOrganizedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Venue$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly address: FieldRef<"Venue", 'String'>
    readonly lat: FieldRef<"Venue", 'String'>
    readonly lng: FieldRef<"Venue", 'String'>
    readonly sportsAvailable: FieldRef<"Venue", 'Sports'>
    readonly pricePerSlot: FieldRef<"Venue", 'Int'>
    readonly contactInfo: FieldRef<"Venue", 'String'>
    readonly rating: FieldRef<"Venue", 'Float'>
    readonly availability: FieldRef<"Venue", 'String'>
    readonly about: FieldRef<"Venue", 'String'>
    readonly facilities: FieldRef<"Venue", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue findRaw
   */
  export type VenueFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Venue aggregateRaw
   */
  export type VenueAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Venue.eventsOrganized
   */
  export type Venue$eventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Venue.bookings
   */
  export type Venue$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    venueId: string | null
    date: Date | null
    status: $Enums.PaymentStatus | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    venueId: string | null
    date: Date | null
    status: $Enums.PaymentStatus | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    venueId: number
    date: number
    status: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    venueId?: true
    date?: true
    status?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    venueId?: true
    date?: true
    status?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    venueId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    venueId: string
    date: Date
    status: $Enums.PaymentStatus
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    venueId?: boolean
    date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    venueId?: boolean
    date?: boolean
    status?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "venueId" | "date" | "status", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      venueId: string
      date: Date
      status: $Enums.PaymentStatus
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * @param {BookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const booking = await prisma.booking.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Booking.
     * @param {BookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const booking = await prisma.booking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly eventId: FieldRef<"Booking", 'String'>
    readonly venueId: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking findRaw
   */
  export type BookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking aggregateRaw
   */
  export type BookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    address: 'address',
    bio: 'bio',
    phone: 'phone',
    profilePicture: 'profilePicture',
    sportsPreferences: 'sportsPreferences',
    eventsJoined: 'eventsJoined',
    role: 'role',
    rating: 'rating',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TurfmateRequestsScalarFieldEnum: {
    id: 'id',
    sender: 'sender',
    receiver: 'receiver',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TurfmateRequestsScalarFieldEnum = (typeof TurfmateRequestsScalarFieldEnum)[keyof typeof TurfmateRequestsScalarFieldEnum]


  export const TurfmatesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    turfmateId: 'turfmateId',
    createdAt: 'createdAt'
  };

  export type TurfmatesScalarFieldEnum = (typeof TurfmatesScalarFieldEnum)[keyof typeof TurfmatesScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    organizerId: 'organizerId',
    sport: 'sport',
    date: 'date',
    playersRequired: 'playersRequired',
    playersJoined: 'playersJoined',
    status: 'status',
    venueId: 'venueId',
    rules: 'rules'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    sportsAvailable: 'sportsAvailable',
    pricePerSlot: 'pricePerSlot',
    contactInfo: 'contactInfo',
    rating: 'rating',
    availability: 'availability',
    about: 'about',
    facilities: 'facilities'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    venueId: 'venueId',
    date: 'date',
    status: 'status'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


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
   * Reference to a field of type 'Sports'
   */
  export type EnumSportsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sports'>
    


  /**
   * Reference to a field of type 'Sports[]'
   */
  export type ListEnumSportsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sports[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FriendStatus'
   */
  export type EnumFriendStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendStatus'>
    


  /**
   * Reference to a field of type 'FriendStatus[]'
   */
  export type ListEnumFriendStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    sportsPreferences?: EnumSportsNullableFilter<"User"> | $Enums.Sports | null
    eventsJoined?: StringNullableListFilter<"User">
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rating?: FloatFilter<"User"> | number
    refreshToken?: StringNullableFilter<"User"> | string | null
    sentRequests?: TurfmateRequestsListRelationFilter
    receivedRequests?: TurfmateRequestsListRelationFilter
    eventsOrganized?: EventListRelationFilter
    bookings?: BookingListRelationFilter
    turfmates?: TurfmatesListRelationFilter
    turfmateOf?: TurfmatesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    sportsPreferences?: SortOrder
    eventsJoined?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    refreshToken?: SortOrder
    sentRequests?: TurfmateRequestsOrderByRelationAggregateInput
    receivedRequests?: TurfmateRequestsOrderByRelationAggregateInput
    eventsOrganized?: EventOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    turfmates?: TurfmatesOrderByRelationAggregateInput
    turfmateOf?: TurfmatesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    sportsPreferences?: EnumSportsNullableFilter<"User"> | $Enums.Sports | null
    eventsJoined?: StringNullableListFilter<"User">
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rating?: FloatFilter<"User"> | number
    refreshToken?: StringNullableFilter<"User"> | string | null
    sentRequests?: TurfmateRequestsListRelationFilter
    receivedRequests?: TurfmateRequestsListRelationFilter
    eventsOrganized?: EventListRelationFilter
    bookings?: BookingListRelationFilter
    turfmates?: TurfmatesListRelationFilter
    turfmateOf?: TurfmatesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    sportsPreferences?: SortOrder
    eventsJoined?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    refreshToken?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    sportsPreferences?: EnumSportsNullableWithAggregatesFilter<"User"> | $Enums.Sports | null
    eventsJoined?: StringNullableListFilter<"User">
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    rating?: FloatWithAggregatesFilter<"User"> | number
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TurfmateRequestsWhereInput = {
    AND?: TurfmateRequestsWhereInput | TurfmateRequestsWhereInput[]
    OR?: TurfmateRequestsWhereInput[]
    NOT?: TurfmateRequestsWhereInput | TurfmateRequestsWhereInput[]
    id?: StringFilter<"TurfmateRequests"> | string
    sender?: StringFilter<"TurfmateRequests"> | string
    receiver?: StringFilter<"TurfmateRequests"> | string
    status?: EnumFriendStatusFilter<"TurfmateRequests"> | $Enums.FriendStatus
    createdAt?: DateTimeFilter<"TurfmateRequests"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TurfmateRequestsOrderByWithRelationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
  }

  export type TurfmateRequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sender_receiver?: TurfmateRequestsSenderReceiverCompoundUniqueInput
    AND?: TurfmateRequestsWhereInput | TurfmateRequestsWhereInput[]
    OR?: TurfmateRequestsWhereInput[]
    NOT?: TurfmateRequestsWhereInput | TurfmateRequestsWhereInput[]
    sender?: StringFilter<"TurfmateRequests"> | string
    receiver?: StringFilter<"TurfmateRequests"> | string
    status?: EnumFriendStatusFilter<"TurfmateRequests"> | $Enums.FriendStatus
    createdAt?: DateTimeFilter<"TurfmateRequests"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sender_receiver">

  export type TurfmateRequestsOrderByWithAggregationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TurfmateRequestsCountOrderByAggregateInput
    _max?: TurfmateRequestsMaxOrderByAggregateInput
    _min?: TurfmateRequestsMinOrderByAggregateInput
  }

  export type TurfmateRequestsScalarWhereWithAggregatesInput = {
    AND?: TurfmateRequestsScalarWhereWithAggregatesInput | TurfmateRequestsScalarWhereWithAggregatesInput[]
    OR?: TurfmateRequestsScalarWhereWithAggregatesInput[]
    NOT?: TurfmateRequestsScalarWhereWithAggregatesInput | TurfmateRequestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TurfmateRequests"> | string
    sender?: StringWithAggregatesFilter<"TurfmateRequests"> | string
    receiver?: StringWithAggregatesFilter<"TurfmateRequests"> | string
    status?: EnumFriendStatusWithAggregatesFilter<"TurfmateRequests"> | $Enums.FriendStatus
    createdAt?: DateTimeWithAggregatesFilter<"TurfmateRequests"> | Date | string
  }

  export type TurfmatesWhereInput = {
    AND?: TurfmatesWhereInput | TurfmatesWhereInput[]
    OR?: TurfmatesWhereInput[]
    NOT?: TurfmatesWhereInput | TurfmatesWhereInput[]
    id?: StringFilter<"Turfmates"> | string
    userId?: StringFilter<"Turfmates"> | string
    turfmateId?: StringFilter<"Turfmates"> | string
    createdAt?: DateTimeFilter<"Turfmates"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    turfmate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TurfmatesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    turfmateId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    turfmate?: UserOrderByWithRelationInput
  }

  export type TurfmatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_turfmateId?: TurfmatesUserIdTurfmateIdCompoundUniqueInput
    AND?: TurfmatesWhereInput | TurfmatesWhereInput[]
    OR?: TurfmatesWhereInput[]
    NOT?: TurfmatesWhereInput | TurfmatesWhereInput[]
    userId?: StringFilter<"Turfmates"> | string
    turfmateId?: StringFilter<"Turfmates"> | string
    createdAt?: DateTimeFilter<"Turfmates"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    turfmate?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_turfmateId">

  export type TurfmatesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    turfmateId?: SortOrder
    createdAt?: SortOrder
    _count?: TurfmatesCountOrderByAggregateInput
    _max?: TurfmatesMaxOrderByAggregateInput
    _min?: TurfmatesMinOrderByAggregateInput
  }

  export type TurfmatesScalarWhereWithAggregatesInput = {
    AND?: TurfmatesScalarWhereWithAggregatesInput | TurfmatesScalarWhereWithAggregatesInput[]
    OR?: TurfmatesScalarWhereWithAggregatesInput[]
    NOT?: TurfmatesScalarWhereWithAggregatesInput | TurfmatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turfmates"> | string
    userId?: StringWithAggregatesFilter<"Turfmates"> | string
    turfmateId?: StringWithAggregatesFilter<"Turfmates"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Turfmates"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    organizerId?: StringFilter<"Event"> | string
    sport?: EnumSportsFilter<"Event"> | $Enums.Sports
    date?: DateTimeFilter<"Event"> | Date | string
    playersRequired?: IntFilter<"Event"> | number
    playersJoined?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    venueId?: StringFilter<"Event"> | string
    rules?: StringNullableFilter<"Event"> | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    organizerId?: SortOrder
    sport?: SortOrder
    date?: SortOrder
    playersRequired?: SortOrder
    playersJoined?: SortOrder
    status?: SortOrder
    venueId?: SortOrder
    rules?: SortOrder
    organizer?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    organizerId?: StringFilter<"Event"> | string
    sport?: EnumSportsFilter<"Event"> | $Enums.Sports
    date?: DateTimeFilter<"Event"> | Date | string
    playersRequired?: IntFilter<"Event"> | number
    playersJoined?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    venueId?: StringFilter<"Event"> | string
    rules?: StringNullableFilter<"Event"> | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    organizerId?: SortOrder
    sport?: SortOrder
    date?: SortOrder
    playersRequired?: SortOrder
    playersJoined?: SortOrder
    status?: SortOrder
    venueId?: SortOrder
    rules?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    sport?: EnumSportsWithAggregatesFilter<"Event"> | $Enums.Sports
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    playersRequired?: IntWithAggregatesFilter<"Event"> | number
    playersJoined?: StringNullableListFilter<"Event">
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    venueId?: StringWithAggregatesFilter<"Event"> | string
    rules?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    lat?: StringNullableFilter<"Venue"> | string | null
    lng?: StringNullableFilter<"Venue"> | string | null
    sportsAvailable?: EnumSportsFilter<"Venue"> | $Enums.Sports
    pricePerSlot?: IntNullableFilter<"Venue"> | number | null
    contactInfo?: StringNullableFilter<"Venue"> | string | null
    rating?: FloatFilter<"Venue"> | number
    availability?: StringFilter<"Venue"> | string
    about?: StringNullableFilter<"Venue"> | string | null
    facilities?: StringNullableListFilter<"Venue">
    eventsOrganized?: EventListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    sportsAvailable?: SortOrder
    pricePerSlot?: SortOrder
    contactInfo?: SortOrder
    rating?: SortOrder
    availability?: SortOrder
    about?: SortOrder
    facilities?: SortOrder
    eventsOrganized?: EventOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    address?: StringFilter<"Venue"> | string
    lat?: StringNullableFilter<"Venue"> | string | null
    lng?: StringNullableFilter<"Venue"> | string | null
    sportsAvailable?: EnumSportsFilter<"Venue"> | $Enums.Sports
    pricePerSlot?: IntNullableFilter<"Venue"> | number | null
    contactInfo?: StringNullableFilter<"Venue"> | string | null
    rating?: FloatFilter<"Venue"> | number
    availability?: StringFilter<"Venue"> | string
    about?: StringNullableFilter<"Venue"> | string | null
    facilities?: StringNullableListFilter<"Venue">
    eventsOrganized?: EventListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    sportsAvailable?: SortOrder
    pricePerSlot?: SortOrder
    contactInfo?: SortOrder
    rating?: SortOrder
    availability?: SortOrder
    about?: SortOrder
    facilities?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    address?: StringWithAggregatesFilter<"Venue"> | string
    lat?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    lng?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    sportsAvailable?: EnumSportsWithAggregatesFilter<"Venue"> | $Enums.Sports
    pricePerSlot?: IntNullableWithAggregatesFilter<"Venue"> | number | null
    contactInfo?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    rating?: FloatWithAggregatesFilter<"Venue"> | number
    availability?: StringWithAggregatesFilter<"Venue"> | string
    about?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    facilities?: StringNullableListFilter<"Venue">
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    eventId?: StringFilter<"Booking"> | string
    venueId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    eventId?: StringFilter<"Booking"> | string
    venueId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    eventId?: StringWithAggregatesFilter<"Booking"> | string
    venueId?: StringWithAggregatesFilter<"Booking"> | string
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TurfmateRequestsCreateInput = {
    id?: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutSentRequestsInput
    player2: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type TurfmateRequestsUncheckedCreateInput = {
    id?: string
    sender: string
    receiver: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type TurfmateRequestsUpdateInput = {
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
    player2?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type TurfmateRequestsUncheckedUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmateRequestsCreateManyInput = {
    id?: string
    sender: string
    receiver: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type TurfmateRequestsUpdateManyMutationInput = {
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmateRequestsUncheckedUpdateManyInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTurfmatesInput
    turfmate: UserCreateNestedOneWithoutTurfmateOfInput
  }

  export type TurfmatesUncheckedCreateInput = {
    id?: string
    userId: string
    turfmateId: string
    createdAt?: Date | string
  }

  export type TurfmatesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTurfmatesNestedInput
    turfmate?: UserUpdateOneRequiredWithoutTurfmateOfNestedInput
  }

  export type TurfmatesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    turfmateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesCreateManyInput = {
    id?: string
    userId: string
    turfmateId: string
    createdAt?: Date | string
  }

  export type TurfmatesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    turfmateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
    organizer: UserCreateNestedOneWithoutEventsOrganizedInput
    venue: VenueCreateNestedOneWithoutEventsOrganizedInput
    bookings?: BookingCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    venueId: string
    rules?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsOrganizedNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsOrganizedNestedInput
    bookings?: BookingUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    venueId?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    venueId: string
    rules?: string | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    venueId?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    eventsOrganized?: EventCreateNestedManyWithoutVenueInput
    bookings?: BookingCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutVenueInput
    bookings?: BookingUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    eventsOrganized?: EventUpdateManyWithoutVenueNestedInput
    bookings?: BookingUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    eventsOrganized?: EventUncheckedUpdateManyWithoutVenueNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
  }

  export type VenueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
  }

  export type VenueUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
  }

  export type BookingCreateInput = {
    id?: string
    date: Date | string
    status: $Enums.PaymentStatus
    user: UserCreateNestedOneWithoutBookingsInput
    event: EventCreateNestedOneWithoutBookingsInput
    venue: VenueCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    event?: EventUpdateOneRequiredWithoutBookingsNestedInput
    venue?: VenueUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
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
    isSet?: boolean
  }

  export type EnumSportsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSportsNullableFilter<$PrismaModel> | $Enums.Sports | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TurfmateRequestsListRelationFilter = {
    every?: TurfmateRequestsWhereInput
    some?: TurfmateRequestsWhereInput
    none?: TurfmateRequestsWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type TurfmatesListRelationFilter = {
    every?: TurfmatesWhereInput
    some?: TurfmatesWhereInput
    none?: TurfmatesWhereInput
  }

  export type TurfmateRequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurfmatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    sportsPreferences?: SortOrder
    eventsJoined?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    sportsPreferences?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    profilePicture?: SortOrder
    sportsPreferences?: SortOrder
    role?: SortOrder
    rating?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
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
    isSet?: boolean
  }

  export type EnumSportsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSportsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sports | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSportsNullableFilter<$PrismaModel>
    _max?: NestedEnumSportsNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFriendStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendStatus | EnumFriendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendStatusFilter<$PrismaModel> | $Enums.FriendStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TurfmateRequestsSenderReceiverCompoundUniqueInput = {
    sender: string
    receiver: string
  }

  export type TurfmateRequestsCountOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TurfmateRequestsMaxOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TurfmateRequestsMinOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFriendStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendStatus | EnumFriendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TurfmatesUserIdTurfmateIdCompoundUniqueInput = {
    userId: string
    turfmateId: string
  }

  export type TurfmatesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    turfmateId?: SortOrder
    createdAt?: SortOrder
  }

  export type TurfmatesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    turfmateId?: SortOrder
    createdAt?: SortOrder
  }

  export type TurfmatesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    turfmateId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSportsFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel>
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    not?: NestedEnumSportsFilter<$PrismaModel> | $Enums.Sports
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

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    organizerId?: SortOrder
    sport?: SortOrder
    date?: SortOrder
    playersRequired?: SortOrder
    playersJoined?: SortOrder
    status?: SortOrder
    venueId?: SortOrder
    rules?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    playersRequired?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    organizerId?: SortOrder
    sport?: SortOrder
    date?: SortOrder
    playersRequired?: SortOrder
    status?: SortOrder
    venueId?: SortOrder
    rules?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    organizerId?: SortOrder
    sport?: SortOrder
    date?: SortOrder
    playersRequired?: SortOrder
    status?: SortOrder
    venueId?: SortOrder
    rules?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    playersRequired?: SortOrder
  }

  export type EnumSportsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel>
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    not?: NestedEnumSportsWithAggregatesFilter<$PrismaModel> | $Enums.Sports
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSportsFilter<$PrismaModel>
    _max?: NestedEnumSportsFilter<$PrismaModel>
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

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    sportsAvailable?: SortOrder
    pricePerSlot?: SortOrder
    contactInfo?: SortOrder
    rating?: SortOrder
    availability?: SortOrder
    about?: SortOrder
    facilities?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    pricePerSlot?: SortOrder
    rating?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    sportsAvailable?: SortOrder
    pricePerSlot?: SortOrder
    contactInfo?: SortOrder
    rating?: SortOrder
    availability?: SortOrder
    about?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    sportsAvailable?: SortOrder
    pricePerSlot?: SortOrder
    contactInfo?: SortOrder
    rating?: SortOrder
    availability?: SortOrder
    about?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    pricePerSlot?: SortOrder
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserCreateeventsJoinedInput = {
    set: string[]
  }

  export type TurfmateRequestsCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input> | TurfmateRequestsCreateWithoutPlayer1Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer1Input | TurfmateRequestsCreateOrConnectWithoutPlayer1Input[]
    createMany?: TurfmateRequestsCreateManyPlayer1InputEnvelope
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
  }

  export type TurfmateRequestsCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input> | TurfmateRequestsCreateWithoutPlayer2Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer2Input | TurfmateRequestsCreateOrConnectWithoutPlayer2Input[]
    createMany?: TurfmateRequestsCreateManyPlayer2InputEnvelope
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TurfmatesCreateNestedManyWithoutUserInput = {
    create?: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput> | TurfmatesCreateWithoutUserInput[] | TurfmatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutUserInput | TurfmatesCreateOrConnectWithoutUserInput[]
    createMany?: TurfmatesCreateManyUserInputEnvelope
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
  }

  export type TurfmatesCreateNestedManyWithoutTurfmateInput = {
    create?: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput> | TurfmatesCreateWithoutTurfmateInput[] | TurfmatesUncheckedCreateWithoutTurfmateInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutTurfmateInput | TurfmatesCreateOrConnectWithoutTurfmateInput[]
    createMany?: TurfmatesCreateManyTurfmateInputEnvelope
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
  }

  export type TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input> | TurfmateRequestsCreateWithoutPlayer1Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer1Input | TurfmateRequestsCreateOrConnectWithoutPlayer1Input[]
    createMany?: TurfmateRequestsCreateManyPlayer1InputEnvelope
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
  }

  export type TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input> | TurfmateRequestsCreateWithoutPlayer2Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer2Input | TurfmateRequestsCreateOrConnectWithoutPlayer2Input[]
    createMany?: TurfmateRequestsCreateManyPlayer2InputEnvelope
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TurfmatesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput> | TurfmatesCreateWithoutUserInput[] | TurfmatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutUserInput | TurfmatesCreateOrConnectWithoutUserInput[]
    createMany?: TurfmatesCreateManyUserInputEnvelope
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
  }

  export type TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput = {
    create?: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput> | TurfmatesCreateWithoutTurfmateInput[] | TurfmatesUncheckedCreateWithoutTurfmateInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutTurfmateInput | TurfmatesCreateOrConnectWithoutTurfmateInput[]
    createMany?: TurfmatesCreateManyTurfmateInputEnvelope
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableEnumSportsFieldUpdateOperationsInput = {
    set?: $Enums.Sports | null
    unset?: boolean
  }

  export type UserUpdateeventsJoinedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurfmateRequestsUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input> | TurfmateRequestsCreateWithoutPlayer1Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer1Input | TurfmateRequestsCreateOrConnectWithoutPlayer1Input[]
    upsert?: TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer1Input | TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: TurfmateRequestsCreateManyPlayer1InputEnvelope
    set?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    disconnect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    delete?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    update?: TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer1Input | TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: TurfmateRequestsUpdateManyWithWhereWithoutPlayer1Input | TurfmateRequestsUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
  }

  export type TurfmateRequestsUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input> | TurfmateRequestsCreateWithoutPlayer2Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer2Input | TurfmateRequestsCreateOrConnectWithoutPlayer2Input[]
    upsert?: TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer2Input | TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: TurfmateRequestsCreateManyPlayer2InputEnvelope
    set?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    disconnect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    delete?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    update?: TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer2Input | TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: TurfmateRequestsUpdateManyWithWhereWithoutPlayer2Input | TurfmateRequestsUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TurfmatesUpdateManyWithoutUserNestedInput = {
    create?: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput> | TurfmatesCreateWithoutUserInput[] | TurfmatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutUserInput | TurfmatesCreateOrConnectWithoutUserInput[]
    upsert?: TurfmatesUpsertWithWhereUniqueWithoutUserInput | TurfmatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TurfmatesCreateManyUserInputEnvelope
    set?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    disconnect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    delete?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    update?: TurfmatesUpdateWithWhereUniqueWithoutUserInput | TurfmatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TurfmatesUpdateManyWithWhereWithoutUserInput | TurfmatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
  }

  export type TurfmatesUpdateManyWithoutTurfmateNestedInput = {
    create?: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput> | TurfmatesCreateWithoutTurfmateInput[] | TurfmatesUncheckedCreateWithoutTurfmateInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutTurfmateInput | TurfmatesCreateOrConnectWithoutTurfmateInput[]
    upsert?: TurfmatesUpsertWithWhereUniqueWithoutTurfmateInput | TurfmatesUpsertWithWhereUniqueWithoutTurfmateInput[]
    createMany?: TurfmatesCreateManyTurfmateInputEnvelope
    set?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    disconnect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    delete?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    update?: TurfmatesUpdateWithWhereUniqueWithoutTurfmateInput | TurfmatesUpdateWithWhereUniqueWithoutTurfmateInput[]
    updateMany?: TurfmatesUpdateManyWithWhereWithoutTurfmateInput | TurfmatesUpdateManyWithWhereWithoutTurfmateInput[]
    deleteMany?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
  }

  export type TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input> | TurfmateRequestsCreateWithoutPlayer1Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer1Input | TurfmateRequestsCreateOrConnectWithoutPlayer1Input[]
    upsert?: TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer1Input | TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: TurfmateRequestsCreateManyPlayer1InputEnvelope
    set?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    disconnect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    delete?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    update?: TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer1Input | TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: TurfmateRequestsUpdateManyWithWhereWithoutPlayer1Input | TurfmateRequestsUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
  }

  export type TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input> | TurfmateRequestsCreateWithoutPlayer2Input[] | TurfmateRequestsUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: TurfmateRequestsCreateOrConnectWithoutPlayer2Input | TurfmateRequestsCreateOrConnectWithoutPlayer2Input[]
    upsert?: TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer2Input | TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: TurfmateRequestsCreateManyPlayer2InputEnvelope
    set?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    disconnect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    delete?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    connect?: TurfmateRequestsWhereUniqueInput | TurfmateRequestsWhereUniqueInput[]
    update?: TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer2Input | TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: TurfmateRequestsUpdateManyWithWhereWithoutPlayer2Input | TurfmateRequestsUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TurfmatesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput> | TurfmatesCreateWithoutUserInput[] | TurfmatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutUserInput | TurfmatesCreateOrConnectWithoutUserInput[]
    upsert?: TurfmatesUpsertWithWhereUniqueWithoutUserInput | TurfmatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TurfmatesCreateManyUserInputEnvelope
    set?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    disconnect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    delete?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    update?: TurfmatesUpdateWithWhereUniqueWithoutUserInput | TurfmatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TurfmatesUpdateManyWithWhereWithoutUserInput | TurfmatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
  }

  export type TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput = {
    create?: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput> | TurfmatesCreateWithoutTurfmateInput[] | TurfmatesUncheckedCreateWithoutTurfmateInput[]
    connectOrCreate?: TurfmatesCreateOrConnectWithoutTurfmateInput | TurfmatesCreateOrConnectWithoutTurfmateInput[]
    upsert?: TurfmatesUpsertWithWhereUniqueWithoutTurfmateInput | TurfmatesUpsertWithWhereUniqueWithoutTurfmateInput[]
    createMany?: TurfmatesCreateManyTurfmateInputEnvelope
    set?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    disconnect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    delete?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    connect?: TurfmatesWhereUniqueInput | TurfmatesWhereUniqueInput[]
    update?: TurfmatesUpdateWithWhereUniqueWithoutTurfmateInput | TurfmatesUpdateWithWhereUniqueWithoutTurfmateInput[]
    updateMany?: TurfmatesUpdateManyWithWhereWithoutTurfmateInput | TurfmatesUpdateManyWithWhereWithoutTurfmateInput[]
    deleteMany?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentRequestsInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFriendStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSentRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRequestsInput
    upsert?: UserUpsertWithoutSentRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRequestsInput, UserUpdateWithoutSentRequestsInput>, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRequestsInput
    upsert?: UserUpsertWithoutReceivedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRequestsInput, UserUpdateWithoutReceivedRequestsInput>, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserCreateNestedOneWithoutTurfmatesInput = {
    create?: XOR<UserCreateWithoutTurfmatesInput, UserUncheckedCreateWithoutTurfmatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurfmatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTurfmateOfInput = {
    create?: XOR<UserCreateWithoutTurfmateOfInput, UserUncheckedCreateWithoutTurfmateOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurfmateOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTurfmatesNestedInput = {
    create?: XOR<UserCreateWithoutTurfmatesInput, UserUncheckedCreateWithoutTurfmatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurfmatesInput
    upsert?: UserUpsertWithoutTurfmatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTurfmatesInput, UserUpdateWithoutTurfmatesInput>, UserUncheckedUpdateWithoutTurfmatesInput>
  }

  export type UserUpdateOneRequiredWithoutTurfmateOfNestedInput = {
    create?: XOR<UserCreateWithoutTurfmateOfInput, UserUncheckedCreateWithoutTurfmateOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurfmateOfInput
    upsert?: UserUpsertWithoutTurfmateOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTurfmateOfInput, UserUpdateWithoutTurfmateOfInput>, UserUncheckedUpdateWithoutTurfmateOfInput>
  }

  export type EventCreateplayersJoinedInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutEventsOrganizedInput = {
    create?: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsOrganizedInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutEventsOrganizedInput = {
    create?: XOR<VenueCreateWithoutEventsOrganizedInput, VenueUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsOrganizedInput
    connect?: VenueWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutEventInput = {
    create?: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput> | BookingCreateWithoutEventInput[] | BookingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventInput | BookingCreateOrConnectWithoutEventInput[]
    createMany?: BookingCreateManyEventInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput> | BookingCreateWithoutEventInput[] | BookingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventInput | BookingCreateOrConnectWithoutEventInput[]
    createMany?: BookingCreateManyEventInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumSportsFieldUpdateOperationsInput = {
    set?: $Enums.Sports
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateplayersJoinedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type UserUpdateOneRequiredWithoutEventsOrganizedNestedInput = {
    create?: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsOrganizedInput
    upsert?: UserUpsertWithoutEventsOrganizedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsOrganizedInput, UserUpdateWithoutEventsOrganizedInput>, UserUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type VenueUpdateOneRequiredWithoutEventsOrganizedNestedInput = {
    create?: XOR<VenueCreateWithoutEventsOrganizedInput, VenueUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: VenueCreateOrConnectWithoutEventsOrganizedInput
    upsert?: VenueUpsertWithoutEventsOrganizedInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutEventsOrganizedInput, VenueUpdateWithoutEventsOrganizedInput>, VenueUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type BookingUpdateManyWithoutEventNestedInput = {
    create?: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput> | BookingCreateWithoutEventInput[] | BookingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventInput | BookingCreateOrConnectWithoutEventInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEventInput | BookingUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BookingCreateManyEventInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEventInput | BookingUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEventInput | BookingUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput> | BookingCreateWithoutEventInput[] | BookingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventInput | BookingCreateOrConnectWithoutEventInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEventInput | BookingUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BookingCreateManyEventInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEventInput | BookingUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEventInput | BookingUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type VenueCreatefacilitiesInput = {
    set: string[]
  }

  export type EventCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutVenueInput = {
    create?: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput> | BookingCreateWithoutVenueInput[] | BookingUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVenueInput | BookingCreateOrConnectWithoutVenueInput[]
    createMany?: BookingCreateManyVenueInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput> | BookingCreateWithoutVenueInput[] | BookingUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVenueInput | BookingCreateOrConnectWithoutVenueInput[]
    createMany?: BookingCreateManyVenueInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type VenueUpdatefacilitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutVenueNestedInput = {
    create?: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput> | BookingCreateWithoutVenueInput[] | BookingUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVenueInput | BookingCreateOrConnectWithoutVenueInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVenueInput | BookingUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: BookingCreateManyVenueInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVenueInput | BookingUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVenueInput | BookingUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput> | EventCreateWithoutVenueInput[] | EventUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVenueInput | EventCreateOrConnectWithoutVenueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVenueInput | EventUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: EventCreateManyVenueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVenueInput | EventUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVenueInput | EventUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput> | BookingCreateWithoutVenueInput[] | BookingUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVenueInput | BookingCreateOrConnectWithoutVenueInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVenueInput | BookingUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: BookingCreateManyVenueInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVenueInput | BookingUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVenueInput | BookingUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutBookingsInput = {
    create?: XOR<EventCreateWithoutBookingsInput, EventUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EventCreateOrConnectWithoutBookingsInput
    connect?: EventWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VenueCreateWithoutBookingsInput, VenueUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutBookingsInput
    connect?: VenueWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type EventUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<EventCreateWithoutBookingsInput, EventUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EventCreateOrConnectWithoutBookingsInput
    upsert?: EventUpsertWithoutBookingsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutBookingsInput, EventUpdateWithoutBookingsInput>, EventUncheckedUpdateWithoutBookingsInput>
  }

  export type VenueUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<VenueCreateWithoutBookingsInput, VenueUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutBookingsInput
    upsert?: VenueUpsertWithoutBookingsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutBookingsInput, VenueUpdateWithoutBookingsInput>, VenueUncheckedUpdateWithoutBookingsInput>
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
    isSet?: boolean
  }

  export type NestedEnumSportsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSportsNullableFilter<$PrismaModel> | $Enums.Sports | null
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumSportsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSportsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sports | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSportsNullableFilter<$PrismaModel>
    _max?: NestedEnumSportsNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFriendStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendStatus | EnumFriendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendStatusFilter<$PrismaModel> | $Enums.FriendStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumFriendStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendStatus | EnumFriendStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendStatus[] | ListEnumFriendStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSportsFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel>
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    not?: NestedEnumSportsFilter<$PrismaModel> | $Enums.Sports
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumSportsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sports | EnumSportsFieldRefInput<$PrismaModel>
    in?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sports[] | ListEnumSportsFieldRefInput<$PrismaModel>
    not?: NestedEnumSportsWithAggregatesFilter<$PrismaModel> | $Enums.Sports
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSportsFilter<$PrismaModel>
    _max?: NestedEnumSportsFilter<$PrismaModel>
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

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type TurfmateRequestsCreateWithoutPlayer1Input = {
    id?: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
    player2: UserCreateNestedOneWithoutReceivedRequestsInput
  }

  export type TurfmateRequestsUncheckedCreateWithoutPlayer1Input = {
    id?: string
    receiver: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type TurfmateRequestsCreateOrConnectWithoutPlayer1Input = {
    where: TurfmateRequestsWhereUniqueInput
    create: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input>
  }

  export type TurfmateRequestsCreateManyPlayer1InputEnvelope = {
    data: TurfmateRequestsCreateManyPlayer1Input | TurfmateRequestsCreateManyPlayer1Input[]
  }

  export type TurfmateRequestsCreateWithoutPlayer2Input = {
    id?: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutSentRequestsInput
  }

  export type TurfmateRequestsUncheckedCreateWithoutPlayer2Input = {
    id?: string
    sender: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type TurfmateRequestsCreateOrConnectWithoutPlayer2Input = {
    where: TurfmateRequestsWhereUniqueInput
    create: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input>
  }

  export type TurfmateRequestsCreateManyPlayer2InputEnvelope = {
    data: TurfmateRequestsCreateManyPlayer2Input | TurfmateRequestsCreateManyPlayer2Input[]
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
    venue: VenueCreateNestedOneWithoutEventsOrganizedInput
    bookings?: BookingCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    venueId: string
    rules?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    status: $Enums.PaymentStatus
    event: EventCreateNestedOneWithoutBookingsInput
    venue: VenueCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
  }

  export type TurfmatesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    turfmate: UserCreateNestedOneWithoutTurfmateOfInput
  }

  export type TurfmatesUncheckedCreateWithoutUserInput = {
    id?: string
    turfmateId: string
    createdAt?: Date | string
  }

  export type TurfmatesCreateOrConnectWithoutUserInput = {
    where: TurfmatesWhereUniqueInput
    create: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput>
  }

  export type TurfmatesCreateManyUserInputEnvelope = {
    data: TurfmatesCreateManyUserInput | TurfmatesCreateManyUserInput[]
  }

  export type TurfmatesCreateWithoutTurfmateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTurfmatesInput
  }

  export type TurfmatesUncheckedCreateWithoutTurfmateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TurfmatesCreateOrConnectWithoutTurfmateInput = {
    where: TurfmatesWhereUniqueInput
    create: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput>
  }

  export type TurfmatesCreateManyTurfmateInputEnvelope = {
    data: TurfmatesCreateManyTurfmateInput | TurfmatesCreateManyTurfmateInput[]
  }

  export type TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: TurfmateRequestsWhereUniqueInput
    update: XOR<TurfmateRequestsUpdateWithoutPlayer1Input, TurfmateRequestsUncheckedUpdateWithoutPlayer1Input>
    create: XOR<TurfmateRequestsCreateWithoutPlayer1Input, TurfmateRequestsUncheckedCreateWithoutPlayer1Input>
  }

  export type TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: TurfmateRequestsWhereUniqueInput
    data: XOR<TurfmateRequestsUpdateWithoutPlayer1Input, TurfmateRequestsUncheckedUpdateWithoutPlayer1Input>
  }

  export type TurfmateRequestsUpdateManyWithWhereWithoutPlayer1Input = {
    where: TurfmateRequestsScalarWhereInput
    data: XOR<TurfmateRequestsUpdateManyMutationInput, TurfmateRequestsUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type TurfmateRequestsScalarWhereInput = {
    AND?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
    OR?: TurfmateRequestsScalarWhereInput[]
    NOT?: TurfmateRequestsScalarWhereInput | TurfmateRequestsScalarWhereInput[]
    id?: StringFilter<"TurfmateRequests"> | string
    sender?: StringFilter<"TurfmateRequests"> | string
    receiver?: StringFilter<"TurfmateRequests"> | string
    status?: EnumFriendStatusFilter<"TurfmateRequests"> | $Enums.FriendStatus
    createdAt?: DateTimeFilter<"TurfmateRequests"> | Date | string
  }

  export type TurfmateRequestsUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: TurfmateRequestsWhereUniqueInput
    update: XOR<TurfmateRequestsUpdateWithoutPlayer2Input, TurfmateRequestsUncheckedUpdateWithoutPlayer2Input>
    create: XOR<TurfmateRequestsCreateWithoutPlayer2Input, TurfmateRequestsUncheckedCreateWithoutPlayer2Input>
  }

  export type TurfmateRequestsUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: TurfmateRequestsWhereUniqueInput
    data: XOR<TurfmateRequestsUpdateWithoutPlayer2Input, TurfmateRequestsUncheckedUpdateWithoutPlayer2Input>
  }

  export type TurfmateRequestsUpdateManyWithWhereWithoutPlayer2Input = {
    where: TurfmateRequestsScalarWhereInput
    data: XOR<TurfmateRequestsUpdateManyMutationInput, TurfmateRequestsUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    organizerId?: StringFilter<"Event"> | string
    sport?: EnumSportsFilter<"Event"> | $Enums.Sports
    date?: DateTimeFilter<"Event"> | Date | string
    playersRequired?: IntFilter<"Event"> | number
    playersJoined?: StringNullableListFilter<"Event">
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    venueId?: StringFilter<"Event"> | string
    rules?: StringNullableFilter<"Event"> | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    eventId?: StringFilter<"Booking"> | string
    venueId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
  }

  export type TurfmatesUpsertWithWhereUniqueWithoutUserInput = {
    where: TurfmatesWhereUniqueInput
    update: XOR<TurfmatesUpdateWithoutUserInput, TurfmatesUncheckedUpdateWithoutUserInput>
    create: XOR<TurfmatesCreateWithoutUserInput, TurfmatesUncheckedCreateWithoutUserInput>
  }

  export type TurfmatesUpdateWithWhereUniqueWithoutUserInput = {
    where: TurfmatesWhereUniqueInput
    data: XOR<TurfmatesUpdateWithoutUserInput, TurfmatesUncheckedUpdateWithoutUserInput>
  }

  export type TurfmatesUpdateManyWithWhereWithoutUserInput = {
    where: TurfmatesScalarWhereInput
    data: XOR<TurfmatesUpdateManyMutationInput, TurfmatesUncheckedUpdateManyWithoutUserInput>
  }

  export type TurfmatesScalarWhereInput = {
    AND?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
    OR?: TurfmatesScalarWhereInput[]
    NOT?: TurfmatesScalarWhereInput | TurfmatesScalarWhereInput[]
    id?: StringFilter<"Turfmates"> | string
    userId?: StringFilter<"Turfmates"> | string
    turfmateId?: StringFilter<"Turfmates"> | string
    createdAt?: DateTimeFilter<"Turfmates"> | Date | string
  }

  export type TurfmatesUpsertWithWhereUniqueWithoutTurfmateInput = {
    where: TurfmatesWhereUniqueInput
    update: XOR<TurfmatesUpdateWithoutTurfmateInput, TurfmatesUncheckedUpdateWithoutTurfmateInput>
    create: XOR<TurfmatesCreateWithoutTurfmateInput, TurfmatesUncheckedCreateWithoutTurfmateInput>
  }

  export type TurfmatesUpdateWithWhereUniqueWithoutTurfmateInput = {
    where: TurfmatesWhereUniqueInput
    data: XOR<TurfmatesUpdateWithoutTurfmateInput, TurfmatesUncheckedUpdateWithoutTurfmateInput>
  }

  export type TurfmatesUpdateManyWithWhereWithoutTurfmateInput = {
    where: TurfmatesScalarWhereInput
    data: XOR<TurfmatesUpdateManyMutationInput, TurfmatesUncheckedUpdateManyWithoutTurfmateInput>
  }

  export type UserCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateWithoutSentRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserCreateOrConnectWithoutSentRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
  }

  export type UserCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateWithoutReceivedRequestsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserCreateOrConnectWithoutReceivedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
  }

  export type UserUpsertWithoutSentRequestsInput = {
    update: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
    create: XOR<UserCreateWithoutSentRequestsInput, UserUncheckedCreateWithoutSentRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRequestsInput, UserUncheckedUpdateWithoutSentRequestsInput>
  }

  export type UserUpdateWithoutSentRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUpsertWithoutReceivedRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
    create: XOR<UserCreateWithoutReceivedRequestsInput, UserUncheckedCreateWithoutReceivedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRequestsInput, UserUncheckedUpdateWithoutReceivedRequestsInput>
  }

  export type UserUpdateWithoutReceivedRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type UserCreateWithoutTurfmatesInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateWithoutTurfmatesInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserCreateOrConnectWithoutTurfmatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTurfmatesInput, UserUncheckedCreateWithoutTurfmatesInput>
  }

  export type UserCreateWithoutTurfmateOfInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTurfmateOfInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTurfmateOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTurfmateOfInput, UserUncheckedCreateWithoutTurfmateOfInput>
  }

  export type UserUpsertWithoutTurfmatesInput = {
    update: XOR<UserUpdateWithoutTurfmatesInput, UserUncheckedUpdateWithoutTurfmatesInput>
    create: XOR<UserCreateWithoutTurfmatesInput, UserUncheckedCreateWithoutTurfmatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTurfmatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTurfmatesInput, UserUncheckedUpdateWithoutTurfmatesInput>
  }

  export type UserUpdateWithoutTurfmatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateWithoutTurfmatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUpsertWithoutTurfmateOfInput = {
    update: XOR<UserUpdateWithoutTurfmateOfInput, UserUncheckedUpdateWithoutTurfmateOfInput>
    create: XOR<UserCreateWithoutTurfmateOfInput, UserUncheckedCreateWithoutTurfmateOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTurfmateOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTurfmateOfInput, UserUncheckedUpdateWithoutTurfmateOfInput>
  }

  export type UserUpdateWithoutTurfmateOfInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTurfmateOfInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEventsOrganizedInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    bookings?: BookingCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateWithoutEventsOrganizedInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserCreateOrConnectWithoutEventsOrganizedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
  }

  export type VenueCreateWithoutEventsOrganizedInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    bookings?: BookingCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutEventsOrganizedInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    bookings?: BookingUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutEventsOrganizedInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutEventsOrganizedInput, VenueUncheckedCreateWithoutEventsOrganizedInput>
  }

  export type BookingCreateWithoutEventInput = {
    id?: string
    date: Date | string
    status: $Enums.PaymentStatus
    user: UserCreateNestedOneWithoutBookingsInput
    venue: VenueCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingCreateOrConnectWithoutEventInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput>
  }

  export type BookingCreateManyEventInputEnvelope = {
    data: BookingCreateManyEventInput | BookingCreateManyEventInput[]
  }

  export type UserUpsertWithoutEventsOrganizedInput = {
    update: XOR<UserUpdateWithoutEventsOrganizedInput, UserUncheckedUpdateWithoutEventsOrganizedInput>
    create: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsOrganizedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsOrganizedInput, UserUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type UserUpdateWithoutEventsOrganizedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsOrganizedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type VenueUpsertWithoutEventsOrganizedInput = {
    update: XOR<VenueUpdateWithoutEventsOrganizedInput, VenueUncheckedUpdateWithoutEventsOrganizedInput>
    create: XOR<VenueCreateWithoutEventsOrganizedInput, VenueUncheckedCreateWithoutEventsOrganizedInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutEventsOrganizedInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutEventsOrganizedInput, VenueUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type VenueUpdateWithoutEventsOrganizedInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    bookings?: BookingUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutEventsOrganizedInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    bookings?: BookingUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutEventInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutEventInput, BookingUncheckedUpdateWithoutEventInput>
    create: XOR<BookingCreateWithoutEventInput, BookingUncheckedCreateWithoutEventInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutEventInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutEventInput, BookingUncheckedUpdateWithoutEventInput>
  }

  export type BookingUpdateManyWithWhereWithoutEventInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutVenueInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
    organizer: UserCreateNestedOneWithoutEventsOrganizedInput
    bookings?: BookingCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVenueInput = {
    id?: string
    title: string
    description?: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVenueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventCreateManyVenueInputEnvelope = {
    data: EventCreateManyVenueInput | EventCreateManyVenueInput[]
  }

  export type BookingCreateWithoutVenueInput = {
    id?: string
    date: Date | string
    status: $Enums.PaymentStatus
    user: UserCreateNestedOneWithoutBookingsInput
    event: EventCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutVenueInput = {
    id?: string
    userId: string
    eventId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingCreateOrConnectWithoutVenueInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput>
  }

  export type BookingCreateManyVenueInputEnvelope = {
    data: BookingCreateManyVenueInput | BookingCreateManyVenueInput[]
  }

  export type EventUpsertWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
    create: XOR<EventCreateWithoutVenueInput, EventUncheckedCreateWithoutVenueInput>
  }

  export type EventUpdateWithWhereUniqueWithoutVenueInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutVenueInput, EventUncheckedUpdateWithoutVenueInput>
  }

  export type EventUpdateManyWithWhereWithoutVenueInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutVenueInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutVenueInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVenueInput, BookingUncheckedUpdateWithoutVenueInput>
    create: XOR<BookingCreateWithoutVenueInput, BookingUncheckedCreateWithoutVenueInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVenueInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVenueInput, BookingUncheckedUpdateWithoutVenueInput>
  }

  export type BookingUpdateManyWithWhereWithoutVenueInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVenueInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    turfmates?: TurfmatesCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesCreateNestedManyWithoutTurfmateInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    address?: string | null
    bio?: string | null
    phone: string
    profilePicture?: string | null
    sportsPreferences?: $Enums.Sports | null
    eventsJoined?: UserCreateeventsJoinedInput | string[]
    role?: $Enums.Role
    rating?: number
    refreshToken?: string | null
    sentRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer1Input
    receivedRequests?: TurfmateRequestsUncheckedCreateNestedManyWithoutPlayer2Input
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    turfmates?: TurfmatesUncheckedCreateNestedManyWithoutUserInput
    turfmateOf?: TurfmatesUncheckedCreateNestedManyWithoutTurfmateInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type EventCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
    organizer: UserCreateNestedOneWithoutEventsOrganizedInput
    venue: VenueCreateNestedOneWithoutEventsOrganizedInput
  }

  export type EventUncheckedCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    venueId: string
    rules?: string | null
  }

  export type EventCreateOrConnectWithoutBookingsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBookingsInput, EventUncheckedCreateWithoutBookingsInput>
  }

  export type VenueCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    eventsOrganized?: EventCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    lat?: string | null
    lng?: string | null
    sportsAvailable: $Enums.Sports
    pricePerSlot?: number | null
    contactInfo?: string | null
    rating?: number
    availability: string
    about?: string | null
    facilities?: VenueCreatefacilitiesInput | string[]
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutBookingsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutBookingsInput, VenueUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    turfmates?: TurfmatesUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUpdateManyWithoutTurfmateNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    sportsPreferences?: NullableEnumSportsFieldUpdateOperationsInput | $Enums.Sports | null
    eventsJoined?: UserUpdateeventsJoinedInput | string[]
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rating?: FloatFieldUpdateOperationsInput | number
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    sentRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer1NestedInput
    receivedRequests?: TurfmateRequestsUncheckedUpdateManyWithoutPlayer2NestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    turfmates?: TurfmatesUncheckedUpdateManyWithoutUserNestedInput
    turfmateOf?: TurfmatesUncheckedUpdateManyWithoutTurfmateNestedInput
  }

  export type EventUpsertWithoutBookingsInput = {
    update: XOR<EventUpdateWithoutBookingsInput, EventUncheckedUpdateWithoutBookingsInput>
    create: XOR<EventCreateWithoutBookingsInput, EventUncheckedCreateWithoutBookingsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutBookingsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutBookingsInput, EventUncheckedUpdateWithoutBookingsInput>
  }

  export type EventUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsOrganizedNestedInput
    venue?: VenueUpdateOneRequiredWithoutEventsOrganizedNestedInput
  }

  export type EventUncheckedUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    venueId?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueUpsertWithoutBookingsInput = {
    update: XOR<VenueUpdateWithoutBookingsInput, VenueUncheckedUpdateWithoutBookingsInput>
    create: XOR<VenueCreateWithoutBookingsInput, VenueUncheckedCreateWithoutBookingsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutBookingsInput, VenueUncheckedUpdateWithoutBookingsInput>
  }

  export type VenueUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    eventsOrganized?: EventUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    lng?: NullableStringFieldUpdateOperationsInput | string | null
    sportsAvailable?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    pricePerSlot?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    availability?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    facilities?: VenueUpdatefacilitiesInput | string[]
    eventsOrganized?: EventUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type TurfmateRequestsCreateManyPlayer1Input = {
    id?: string
    receiver: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type TurfmateRequestsCreateManyPlayer2Input = {
    id?: string
    sender: string
    status: $Enums.FriendStatus
    createdAt?: Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    venueId: string
    rules?: string | null
  }

  export type BookingCreateManyUserInput = {
    id?: string
    eventId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type TurfmatesCreateManyUserInput = {
    id?: string
    turfmateId: string
    createdAt?: Date | string
  }

  export type TurfmatesCreateManyTurfmateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TurfmateRequestsUpdateWithoutPlayer1Input = {
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneRequiredWithoutReceivedRequestsNestedInput
  }

  export type TurfmateRequestsUncheckedUpdateWithoutPlayer1Input = {
    receiver?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmateRequestsUncheckedUpdateManyWithoutPlayer1Input = {
    receiver?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmateRequestsUpdateWithoutPlayer2Input = {
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutSentRequestsNestedInput
  }

  export type TurfmateRequestsUncheckedUpdateWithoutPlayer2Input = {
    sender?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmateRequestsUncheckedUpdateManyWithoutPlayer2Input = {
    sender?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendStatusFieldUpdateOperationsInput | $Enums.FriendStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: VenueUpdateOneRequiredWithoutEventsOrganizedNestedInput
    bookings?: BookingUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    venueId?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    venueId?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    event?: EventUpdateOneRequiredWithoutBookingsNestedInput
    venue?: VenueUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type TurfmatesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turfmate?: UserUpdateOneRequiredWithoutTurfmateOfNestedInput
  }

  export type TurfmatesUncheckedUpdateWithoutUserInput = {
    turfmateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesUncheckedUpdateManyWithoutUserInput = {
    turfmateId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesUpdateWithoutTurfmateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTurfmatesNestedInput
  }

  export type TurfmatesUncheckedUpdateWithoutTurfmateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurfmatesUncheckedUpdateManyWithoutTurfmateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyEventInput = {
    id?: string
    userId: string
    venueId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type BookingUpdateWithoutEventInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    venue?: VenueUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingUncheckedUpdateManyWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type EventCreateManyVenueInput = {
    id?: string
    title: string
    description?: string | null
    organizerId: string
    sport: $Enums.Sports
    date: Date | string
    playersRequired: number
    playersJoined?: EventCreateplayersJoinedInput | string[]
    status?: $Enums.EventStatus
    rules?: string | null
  }

  export type BookingCreateManyVenueInput = {
    id?: string
    userId: string
    eventId: string
    date: Date | string
    status: $Enums.PaymentStatus
  }

  export type EventUpdateWithoutVenueInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: UserUpdateOneRequiredWithoutEventsOrganizedNestedInput
    bookings?: BookingUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVenueInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutVenueInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizerId?: StringFieldUpdateOperationsInput | string
    sport?: EnumSportsFieldUpdateOperationsInput | $Enums.Sports
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    playersRequired?: IntFieldUpdateOperationsInput | number
    playersJoined?: EventUpdateplayersJoinedInput | string[]
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    rules?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutVenueInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    event?: EventUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutVenueInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingUncheckedUpdateManyWithoutVenueInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }



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