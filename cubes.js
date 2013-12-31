CUBES_INIT = function (N) {
  
  var N1 = N + 1;
  var NN1 = N * (N + 1);
  var N1N1 = N1 * N1;

  var CUBES = {};

  //----------------------------------------------------------------------------------

  function _edge_index_ (a, b, c, d) { return 3 * (a + N1*b + N1N1*c) + d; }

  function _edge_unindex_ (i) {
    var d = i % 3;
    var ip = (i-d) / 3;
    var ipp = ip % N1N1;
    var c = (ip - ipp) / N1N1;
    var a = ipp % N1;
    var b = (ipp-a)/N1;
    return [a, b, c, d];
  }

  function _vert_index_ (a, b, c) { return a + N1 * b + N1N1 * c; }

  function _vert_unindex_ (i) {
    var ip = i % N1N1;
    var z = (i-ip)/N1N1;
    var x = ip % N1;
    var y = (ip-x)/N1;
    return [x, y, z];
  }

  //----------------------------------------------------------------------------------

  CUBES.edges = new Array(3 * N * N1N1);

  // edge offsets
  var eo01 = [0,0,0,0];  var eo02 = [0,0,0,1];  var eo04 = [0,0,0,2];
  var eo45 = [0,0,1,0];  var eo13 = [1,0,0,1];  var eo26 = [0,1,0,2];
  var eo23 = [0,1,0,0];  var eo46 = [0,0,1,1];  var eo15 = [1,0,0,2];
  var eo67 = [0,1,1,0];  var eo57 = [1,0,1,1];  var eo37 = [1,1,0,2];

  // @arg c cube id (3d vector)
  // @arg m edge offsets
  function _ind_e_ (c, m) {
    if( m[3] == 0 ) return _edge_index_(c[2]+m[2], c[1]+m[1], c[0]+m[0], m[3]);
    if( m[3] == 1 ) return _edge_index_(c[0]+m[0], c[2]+m[2], c[1]+m[1], m[3]);
    if( m[3] == 2 ) return _edge_index_(c[1]+m[1], c[0]+m[0], c[2]+m[2], m[3]);
    throw 'invalid edge offset: ' + m[3];
  }

  function _id_of_e_ (index) {
    var abcd = _edge_unindex_(index);
    var a = abcd[0], b = abcd[1], c = abcd[2], d = abcd[3];
    if( d == 0 ) return [c, b, a, d];
    if( d == 1 ) return [a, c, b, d];
    if( d == 2 ) return [b, a, c, d];
    throw 'invalid edge offset d: ' + d;
  }

  function _ind_e01_ (c) { return _ind_e_(c, eo01); }
  function _ind_e45_ (c) { return _ind_e_(c, eo45); }
  function _ind_e23_ (c) { return _ind_e_(c, eo23); }
  function _ind_e67_ (c) { return _ind_e_(c, eo67); }
  function _ind_e02_ (c) { return _ind_e_(c, eo02); }
  function _ind_e13_ (c) { return _ind_e_(c, eo13); }
  function _ind_e46_ (c) { return _ind_e_(c, eo46); }
  function _ind_e57_ (c) { return _ind_e_(c, eo57); }
  function _ind_e04_ (c) { return _ind_e_(c, eo04); }
  function _ind_e26_ (c) { return _ind_e_(c, eo26); }
  function _ind_e15_ (c) { return _ind_e_(c, eo15); }
  function _ind_e37_ (c) { return _ind_e_(c, eo37); }

  CUBES.e01 = function (c) { return this.edges[_ind_e_(c, eo01)]; };
  CUBES.e45 = function (c) { return this.edges[_ind_e_(c, eo45)]; };
  CUBES.e23 = function (c) { return this.edges[_ind_e_(c, eo23)]; };
  CUBES.e67 = function (c) { return this.edges[_ind_e_(c, eo67)]; };
  CUBES.e02 = function (c) { return this.edges[_ind_e_(c, eo02)]; };
  CUBES.e13 = function (c) { return this.edges[_ind_e_(c, eo13)]; };
  CUBES.e46 = function (c) { return this.edges[_ind_e_(c, eo46)]; };
  CUBES.e57 = function (c) { return this.edges[_ind_e_(c, eo57)]; };
  CUBES.e04 = function (c) { return this.edges[_ind_e_(c, eo04)]; };
  CUBES.e26 = function (c) { return this.edges[_ind_e_(c, eo26)]; };
  CUBES.e15 = function (c) { return this.edges[_ind_e_(c, eo15)]; };
  CUBES.e37 = function (c) { return this.edges[_ind_e_(c, eo37)]; };

  for (var i = CUBES.edges.length - 1; i >= 0; i--) {
    var c = _id_of_e_( i );
    c[c[3]] += .5;
    CUBES.edges[i] = [c[0], c[1], c[2]];
  };

  //----------------------------------------------------------------------------------

  CUBES.verts = new Array(N1 * N1 * N1);

  for (var i = CUBES.verts.length - 1; i >= 0; i--) {
    CUBES.verts[i] = _vert_unindex_(i);
  };

  // vertex offsets
  var vo0 = [0,0,0];  var vo1 = [1,0,0];  var vo2 = [0,1,0];  var vo3 = [1,1,0];
  var vo4 = [0,0,1];  var vo5 = [1,0,1];  var vo6 = [0,1,1];  var vo7 = [1,1,1];

  // @arg c cube id (3d vector)
  // @arg m vertex offsets
  function _ind_v_ (c, m) { return _vert_index_(c[0] + m[0], c[1] + m[1], c[2] + m[2]); }

  function _ind_v0_ (c) { return _ind_v_(c, vo0); }
  function _ind_v1_ (c) { return _ind_v_(c, vo1); }
  function _ind_v2_ (c) { return _ind_v_(c, vo2); }
  function _ind_v3_ (c) { return _ind_v_(c, vo3); }
  function _ind_v4_ (c) { return _ind_v_(c, vo4); }
  function _ind_v5_ (c) { return _ind_v_(c, vo5); }
  function _ind_v6_ (c) { return _ind_v_(c, vo6); }
  function _ind_v7_ (c) { return _ind_v_(c, vo7); }

  CUBES.v0 = function (c) { return this.verts[_ind_v_(c, vo0)]; };
  CUBES.v1 = function (c) { return this.verts[_ind_v_(c, vo1)]; };
  CUBES.v2 = function (c) { return this.verts[_ind_v_(c, vo2)]; };
  CUBES.v3 = function (c) { return this.verts[_ind_v_(c, vo3)]; };
  CUBES.v4 = function (c) { return this.verts[_ind_v_(c, vo4)]; };
  CUBES.v5 = function (c) { return this.verts[_ind_v_(c, vo5)]; };
  CUBES.v6 = function (c) { return this.verts[_ind_v_(c, vo6)]; };
  CUBES.v7 = function (c) { return this.verts[_ind_v_(c, vo7)]; };

  //----------------------------------------------------------------------------------

  CUBES.edgeVerts = function (edge_index, vert) {
    var id = _id_of_e_(edge_index);
    var x = id[0], y = id[1], z = id[2], d = id[3];

    if( vert == 0 )
      return CUBES.v0(x, y, z);

    var b;
    if     ( d == 0 ) b = CUBES.v1(x, y, z);
    else if( d == 1 ) b = CUBES.v2(x, y, z);
    else if( d == 2 ) b = CUBES.v4(x, y, z);
    else throw 'invalid dimension offset "d": ' + d;

    if( vert == 1 )
      return b;

    if( vert == undefined )
      return [CUBES.v0(x, y, z), b];

    throw 'invalid "vert" value: ' + vert;
  }

  //----------------------------------------------------------------------------------

  // @arg c cube id (3d vector)
  // @arg v vertex offset
  CUBES.valueAtCorner = function (c, v) {
    var xyz = vec3.add(vec3.create(), c, v);
    return 3.5 - vec3.distance(xyz, [5,5,5]);
  }

  function getVertexOfEdge (edge) {
    return edge;
  }

  var _three_verts_ = [];
  var DEBUG = true;
  function renderVertexOfEdge (edgeIndex) {
    var vert = getVertexOfEdge(CUBES.edges[edgeIndex]);

    _three_verts_.push(vert);

    if( _three_verts_.length == 3 ) {
      var side1 = vec3.subtract(vec3.create(), _three_verts_[1], _three_verts_[0]);
      var side2 = vec3.subtract(vec3.create(), _three_verts_[2], _three_verts_[0]);
      var norm = vec3.cross(vec3.create(), side2, side1);

      var vdata = [];
      function addv (v) {
        vdata.push(v[0], v[1], v[2], norm[0], norm[1], norm[2]);
      }
      addv(_three_verts_[0]);
      addv(_three_verts_[1]);
      addv(_three_verts_[2]);

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vdata), gl.STATIC_DRAW);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      _three_verts_ = [];
    }
  }

  CUBES.cornerBitmask = function (c) {
    var bitmask = 0;
    if( CUBES.valueAtCorner(c, vo0) > 0 ) bitmask += (1 << 0);
    if( CUBES.valueAtCorner(c, vo1) > 0 ) bitmask += (1 << 1);
    if( CUBES.valueAtCorner(c, vo2) > 0 ) bitmask += (1 << 2);
    if( CUBES.valueAtCorner(c, vo3) > 0 ) bitmask += (1 << 3);
    if( CUBES.valueAtCorner(c, vo4) > 0 ) bitmask += (1 << 4);
    if( CUBES.valueAtCorner(c, vo5) > 0 ) bitmask += (1 << 5);
    if( CUBES.valueAtCorner(c, vo6) > 0 ) bitmask += (1 << 6);
    if( CUBES.valueAtCorner(c, vo7) > 0 ) bitmask += (1 << 7);
    return bitmask;
  }

  CUBES.getEO = function (a, b) {
    var eo;
    if     (a == 0 && b == 0) { eo = eo01; }
    else if(a == 0 && b == 1) { eo = eo02; }
    else if(a == 0 && b == 2) { eo = eo04; }
    else if(a == 1 && b == 1) { eo = eo13; }
    else if(a == 1 && b == 2) { eo = eo15; }
    else if(a == 2 && b == 0) { eo = eo23; }
    else if(a == 2 && b == 2) { eo = eo26; }
    else if(a == 4 && b == 0) { eo = eo45; }
    else if(a == 4 && b == 1) { eo = eo46; }
    else if(a == 3 && b == 2) { eo = eo37; }
    else if(a == 5 && b == 1) { eo = eo57; }
    else if(a == 6 && b == 0) { eo = eo67; }
    else throw 'invalid edge: ' + a + " " + b + " " + P;
    return eo;
  }

  CUBES.evalCube = function(c) {
    // 1. generate corner bitmask
    var bitmask = CUBES.cornerBitmask(c);

    // 2. get triangle pattern
    var P = CUBES_TABLE[bitmask];

    // 3. generate triangles
    var len = P.length;
    for( var i = 0; i < len; i += 2 ) {
      var a = P[i], b = P[i+1];
      var eo = CUBES.getEO(a, b);
      var edgeIndex = _ind_e_(c, eo);

      renderVertexOfEdge(edgeIndex);
    }
  }

  CUBES._ind_e_ = function (c, eo) { return _ind_e_(c, eo); }

  CUBES.evalAllCubes = function () {
    for (var x = 0; x < N; x++) {
      for (var y = 0; y < N; y++) {
        for (var z = 0; z < N; z++) {
          this.evalCube([x, y, z]);
        };
      };
    };
    DEBUG = false;
  }

  //----------------------------------------------------------------------------------


  for (var i = CUBES.edges.length - 1; i >= 0; i--) {
    var id = _id_of_e_(i);
    var e = CUBES.edges[i];
    var res = vec3.subtract(vec3.create(), e, id);
    res[id[3]] -= .5;
  };

  return CUBES;
};
